const fs = require("fs");
const path = require("path");

const PLACEHOLDER = "Describe what this project does.";

function readmeWarnings() {
  const file = path.join(process.cwd(), "README.md");

  if (!fs.existsSync(file)) {
    return [];
  }

  const text = fs.readFileSync(file, "utf8");
  const warnings = [];

  if (text.includes(PLACEHOLDER)) {
    warnings.push("README still has placeholder text. Describe what your project does.");
  }
  if (!text.toLowerCase().includes("install")) {
    warnings.push("README has no installation instructions.");
  }
  if (!text.includes("```")) {
    warnings.push("README has no code block.");
  }

  return warnings;
}

module.exports = { readmeWarnings };