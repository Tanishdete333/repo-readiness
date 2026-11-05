const fs = require("fs");
const path = require("path");
const { fileExists } = require("./fileExists");

function gitignoreWarnings() {
  if (!fileExists(".env")) {
    return [];
  }

  const file = path.join(process.cwd(), ".gitignore");
  const text = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";

  const ignored = text
    .split("\n")
    .map((line) => line.trim())
    .some((line) => line === ".env" || line === ".env*" || line === "*.env");

  if (!ignored) {
    return [".env exists but is not in .gitignore. Your secrets could be committed."];
  }

  return [];
}

module.exports = { gitignoreWarnings };