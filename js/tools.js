// Free OCR & Scanning Directory — tool data
// Every entry: free, no account required, no affiliate links.
// Published by Asdale Dynamics, LLC.

const TOOLS = [
  {
    name: "Tesseract OCR",
    tagline: "The most widely used open-source OCR engine. Command line, excellent accuracy.",
    cost: "Free (open source, Apache 2.0)",
    platforms: ["Windows", "macOS", "Linux"],
    account: false,
    type: "cli",
    steps: [
      "Install Tesseract: on Windows use the UB-Mannheim installer; on macOS run `brew install tesseract`; on Linux run `sudo apt install tesseract-ocr`.",
      "Scan your document to an image (PNG, JPG, or TIFF) or open an existing scan.",
      "Run `tesseract image.png output` in your terminal. This creates `output.txt` with the recognized text.",
      "Open `output.txt` and copy or save the searchable text."
    ],
    official: "https://github.com/tesseract-ocr/tesseract",
    source: "https://github.com/tesseract-ocr/tesseract",
    license: "Apache 2.0"
  },
  {
    name: "gImageReader",
    tagline: "Graphical front end for Tesseract. Pick a language, load an image or PDF, get text.",
    cost: "Free (open source, GPL-3.0)",
    platforms: ["Windows", "Linux"],
    account: false,
    type: "gui",
    steps: [
      "Download and install gImageReader from its official site (Windows) or package manager (Linux).",
      "Open gImageReader and load your scanned image or PDF page.",
      "Choose the recognition language (default English; install extra language packs if needed).",
      "Click Recognize. The extracted text appears in the right pane — copy or save it."
    ],
    official: "https://github.com/manisandro/gImageReader",
    source: "https://github.com/manisandro/gImageReader",
    license: "GPL-3.0"
  },
  {
    name: "NAPS2",
    tagline: "Not Another PDF Scanner 2. Scan to PDF, run OCR, and save searchable PDFs.",
    cost: "Free (open source, GPL-3.0)",
    platforms: ["Windows"],
    account: false,
    type: "gui",
    steps: [
      "Download and install NAPS2 from naps2.com.",
      "Place pages in your scanner and click Scan in NAPS2.",
      "Select the OCR language and run OCR on the scanned pages.",
      "Save as a searchable PDF — the text inside can now be searched and copied."
    ],
    official: "https://www.naps2.com/",
    source: "https://github.com/cyanfish/naps2",
    license: "GPL-3.0"
  },
  {
    name: "OCRmyPDF",
    tagline: "Adds a searchable text layer to existing scanned PDFs without damaging the original images.",
    cost: "Free (open source, MIT / Apache 2.0)",
    platforms: ["Linux", "macOS", "Windows (WSL or Docker)"],
    account: false,
    type: "cli",
    steps: [
      "Install OCRmyPDF: `pip install ocrmypdf` (or use your system package manager / Docker).",
      "Make sure Tesseract is installed — OCRmyPDF uses it for recognition.",
      "Run `ocrmypdf input.pdf output.pdf`.",
      "Open output.pdf in any PDF reader and search or copy the text."
    ],
    official: "https://github.com/ocrmypdf/ocrmypdf",
    source: "https://github.com/ocrmypdf/ocrmypdf",
    license: "MIT / Apache 2.0"
  },
  {
    name: "pdfsandwich",
    tagline: "Command-line tool that OCRs scanned PDFs and produces searchable PDF output.",
    cost: "Free (open source, GPL-2.0)",
    platforms: ["Linux"],
    account: false,
    type: "cli",
    steps: [
      "Install pdfsandwich via your Linux package manager (`sudo apt install pdfsandwich` on Debian/Ubuntu).",
      "Run `pdfsandwich input.pdf`.",
      "The tool creates `input_ocr.pdf` — a searchable PDF with an OCR text layer.",
      "Open it in your PDF viewer and search the text."
    ],
    official: "https://www.tobias-elze.de/pdfsandwich/",
    source: "https://github.com/rgbeyer/pdfsandwich",
    license: "GPL-2.0"
  },
  {
    name: "SimpleScan",
    tagline: "GNOME's simple document scanner. Scan to PDF, JPEG, or PNG.",
    cost: "Free (open source, GPL-3.0)",
    platforms: ["Linux"],
    account: false,
    type: "gui",
    steps: [
      "Open SimpleScan (preinstalled on many Ubuntu/GNOME systems, or install from your package manager).",
      "Place your document on the scanner and click Scan.",
      "Save the result as PDF or image.",
      "Note: SimpleScan scans but does not OCR — run the saved file through OCRmyPDF or Tesseract to make it searchable."
    ],
    official: "https://gitlab.gnome.org/GNOME/simple-scan",
    source: "https://gitlab.gnome.org/GNOME/simple-scan",
    license: "GPL-3.0"
  },
  {
    name: "gscan2pdf",
    tagline: "Scanning interface with OCR. Produces searchable PDFs from scanned pages.",
    cost: "Free (open source, GPL)",
    platforms: ["Linux"],
    account: false,
    type: "gui",
    steps: [
      "Install gscan2pdf from your Linux package manager or CPAN.",
      "Scan pages directly from your scanner or load existing images.",
      "Select an OCR engine (Tesseract by default) and choose a language.",
      "Save the result as a searchable PDF."
    ],
    official: "https://gscan2pdf.org/",
    source: "https://gitlab.com/gscan2pdf/gscan2pdf",
    license: "GPL"
  },
  {
    name: "XSane",
    tagline: "Feature-rich graphical scanning front end for SANE-compatible scanners.",
    cost: "Free (open source, GPL-2.0)",
    platforms: ["Linux"],
    account: false,
    type: "gui",
    steps: [
      "Install xsane (`sudo apt install xsane` on Debian/Ubuntu).",
      "Launch XSane, choose your scanner, and preview the scan.",
      "Scan and save as an image or PDF.",
      "Like SimpleScan, XSane captures the page — pair it with Tesseract or OCRmyPDF to make text searchable."
    ],
    official: "http://www.xsane.org/",
    source: "https://gitlab.com/sane-project/backends",
    license: "GPL-2.0"
  },
  {
    name: "Windows Snipping Tool (Text Actions)",
    tagline: "Built into Windows 10/11. OCR text straight out of screenshots — no install needed.",
    cost: "Free (built into Windows)",
    platforms: ["Windows"],
    account: false,
    type: "built-in",
    steps: [
      "Open the Snipping Tool and take a screenshot (or open an existing image with it).",
      "Click the Text Actions button in the toolbar.",
      "Windows detects text in the image. Click Copy all text or select specific text to copy.",
      "Paste the text anywhere — it's now searchable."
    ],
    official: "https://support.microsoft.com/windows/use-snipping-tool-to-capture-screenshots-00246a68-9894-28ee-2280-4eddf17893d5",
    license: "Proprietary (Microsoft Windows)"
  },
  {
    name: "macOS Preview / Live Text",
    tagline: "Apple's built-in OCR. Select text in images and PDFs on Mac, iPhone, and iPad.",
    cost: "Free (built into macOS / iOS)",
    platforms: ["macOS", "iOS"],
    account: false,
    type: "built-in",
    steps: [
      "Open a scanned image or PDF in Preview on Mac (or a photo in Photos on iPhone/iPad).",
      "Hover or select over text — Live Text highlights recognized text automatically.",
      "Select the text, right-click, and choose Copy.",
      "Paste into Notes, Mail, or any app. On iPhone, you can also scan text directly with the Camera app."
    ],
    official: "https://support.apple.com/guide/preview/copy-or-remove-text-from-an-image-prvw1044/mac",
    license: "Proprietary (Apple)"
  },
  {
    name: "EasyOCR",
    tagline: "Python OCR library supporting 80+ languages. Good for scripts and local AI workflows.",
    cost: "Free (open source, Apache 2.0)",
    platforms: ["Windows", "macOS", "Linux"],
    account: false,
    type: "cli",
    steps: [
      "Install Python, then run `pip install easyocr`.",
      "In a Python script: `import easyocr; reader = easyocr.Reader(['en']); result = reader.readtext('image.png')`.",
      "Print or save `result` — each item holds the detected text and its position.",
      "Requires an internet connection the first run to download model weights."
    ],
    official: "https://github.com/JaidedAI/EasyOCR",
    source: "https://github.com/JaidedAI/EasyOCR",
    license: "Apache 2.0"
  }
];
