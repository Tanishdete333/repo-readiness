const fs = require("fs");
const path = require("path");

function readPackage() {
  const file = path.join(process.cwd(), "package.json");

  if (!fs.existsSync(file)) {
    return null;
  }

  const text = fs.readFileSync(file, "utf8");
  return JSON.parse(text);
}

module.exports = { readPackage };