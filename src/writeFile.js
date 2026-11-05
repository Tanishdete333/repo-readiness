const fs = require("fs");
const path = require("path");

function writeFile(relativePath, content) {
  const fullPath = path.join(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

module.exports = { writeFile };