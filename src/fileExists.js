const fs = require("fs");
const path = require("path");

function fileExists(relativePath) {
  const fullPath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(fullPath)) {
    return false;
  }

  if (fs.statSync(fullPath).isDirectory()) {
    return fs.readdirSync(fullPath).length > 0;
  }

  return true;
}

module.exports = { fileExists };