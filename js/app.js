// Free OCR & Scanning Directory — render + client-side search
// Published by Asdale Dynamics, LLC.

(function () {
  const searchInput = document.getElementById("search");
  const countEl = document.getElementById("count");
  const grid = document.getElementById("grid");
  const chips = document.querySelectorAll(".chip");

  let activeFilter = "all";

  function matchesFilter(tool, filter) {
    if (filter === "all") return true;
    const map = {
      windows: "Windows",
      macos: "macOS",
      linux: "Linux",
      cli: "Command line",
      gui: "Desktop app",
      "built-in": "Built-in"
    };
    const target = map[filter];
    if (target === "Command line") return tool.type === "cli";
    if (target === "Desktop app") return tool.type === "gui";
    if (target === "Built-in") return tool.type === "built-in";
    return tool.platforms.includes(target);
  }

  function matchesQuery(tool, q) {
    const haystack = [
      tool.name,
      tool.tagline,
      tool.cost,
      tool.platforms.join(" "),
      tool.steps.join(" ")
    ].join(" ").toLowerCase();
    return haystack.includes(q);
  }

  function render() {
    const q = searchInput.value.toLowerCase();
    const filtered = TOOLS.filter(function (tool) {
      return matchesFilter(tool, activeFilter) && matchesQuery(tool, q);
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = '<div class="empty">No tools match your search.</div>';
    } else {
      filtered.forEach(function (tool) {
        const card = document.createElement("article");
        card.className = "card";

        const platforms = tool.platforms.join(", ");
        const stepsHtml = tool.steps.map(function (s) { return "<li>" + s + "</li>"; }).join("");
        const officialLink = '<a href="' + tool.official + '" target="_blank" rel="noopener noreferrer">Official site</a>';
        const sourceLink = tool.source ? '<a href="' + tool.source + '" target="_blank" rel="noopener noreferrer">Source</a>' : "";

        card.innerHTML =
          '<h3>' + escapeHtml(tool.name) + '</h3>' +
          '<div class="tag">' + escapeHtml(tool.cost) + '</div>' +
          '<p>' + escapeHtml(tool.tagline) + '</p>' +
          '<div class="steps"><h4>Steps</h4><ol>' + stepsHtml + '</ol>' + officialLink + (sourceLink ? " · " + sourceLink : "") + '</div>' +
          '<div class="meta"><strong>Platform:</strong> ' + escapeHtml(platforms) + ' &bull; <strong>Account:</strong> No &bull; <strong>License:</strong> ' + escapeHtml(tool.license) + '</div>';

        grid.appendChild(card);
      });
    }

    countEl.textContent = filtered.length + " tool" + (filtered.length === 1 ? "" : "s") + " of " + TOOLS.length;
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  searchInput.addEventListener("input", render);

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      render();
    });
  });

  render();
})();
