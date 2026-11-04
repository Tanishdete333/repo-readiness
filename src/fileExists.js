const fs = require("fs");
const path = require("path");

function fileExists(relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);
  return fs.existsSync(fullPath);
}

module.exports = { fileExists };