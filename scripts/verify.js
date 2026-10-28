// Verification script for Free OCR & Scanning Directory
// Checks data integrity: required fields, no accounts, no affiliate links,
// LICENSE copyright line, README credit.
// Run: node scripts/verify.js

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
let failures = 0;

function fail(msg) {
  console.error("FAIL: " + msg);
  failures += 1;
}

function pass(msg) {
  console.log("ok: " + msg);
}

// 1. LICENSE copyright line
const license = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");
const expectedCopyright = "Copyright (c) 2026 Asdale Dynamics, LLC";
if (license.includes(expectedCopyright)) {
  pass("LICENSE contains exact copyright line");
} else {
  fail("LICENSE missing exact copyright line: " + expectedCopyright);
}

// 2. README credits Asdale Dynamics, LLC
const readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf8");
if (readme.includes("Asdale Dynamics, LLC")) {
  pass("README credits Asdale Dynamics, LLC");
} else {
  fail("README does not credit Asdale Dynamics, LLC");
}

// 3. No .github/workflows
const workflowsDir = path.join(ROOT, ".github", "workflows");
if (!fs.existsSync(workflowsDir)) {
  pass("No .github/workflows directory");
} else {
  fail(".github/workflows directory exists");
}

// 4. Load tool data
const toolsJs = fs.readFileSync(path.join(ROOT, "js", "tools.js"), "utf8");
const toolsMatch = toolsJs.match(/const TOOLS\s*=\s*(\[\s[\s\S]*?\]\s*);?\s*$/);
if (!toolsMatch) {
  fail("Could not parse TOOLS array from js/tools.js");
  process.exitCode = 1;
  process.exit(1);
}

const tools = eval(toolsMatch[1]); // eslint-disable-line no-eval
pass("Loaded " + tools.length + " tools from js/tools.js");

const requiredFields = ["name", "tagline", "cost", "platforms", "account", "type", "steps", "official", "license"];
const affiliateSignals = ["amazon", "ebay", "affiliate", "ref=", "utm_source", "tag="];

tools.forEach(function (tool, i) {
  const prefix = "tool[" + i + "] " + tool.name;

  requiredFields.forEach(function (field) {
    if (tool[field] === undefined || tool[field] === null) {
      fail(prefix + " missing field: " + field);
    }
  });

  if (Array.isArray(tool.steps) && tool.steps.length === 0) {
    fail(prefix + " has empty steps");
  }

  if (tool.account !== false) {
    fail(prefix + " requires an account (account: " + tool.account + ")");
  }

  if (typeof tool.official === "string") {
    try {
      new URL(tool.official);
    } catch (e) {
      fail(prefix + " official link is not a valid URL: " + tool.official);
    }
    const lower = tool.official.toLowerCase();
    affiliateSignals.forEach(function (sig) {
      if (lower.includes(sig)) {
        fail(prefix + " official link may be affiliate/tracking: " + tool.official);
      }
    });
  }

  if (Array.isArray(tool.platforms) && tool.platforms.length === 0) {
    fail(prefix + " has no platforms");
  }

  pass(prefix + " valid (platforms: " + tool.platforms.join(", ") + ")");
});

// 5. HTML references both JS files
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
if (html.includes('js/tools.js') && html.includes('js/app.js')) {
  pass("index.html loads tools.js and app.js");
} else {
  fail("index.html missing JS script references");
}

console.log("\n" + (failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"));
process.exitCode = failures === 0 ? 0 : 1;
