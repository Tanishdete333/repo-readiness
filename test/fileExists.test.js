const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { fileExists } = require("../src/fileExists");

test("an empty folder does not count, a folder with a file does", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "rr-"));
  const original = process.cwd();
  process.chdir(dir);

  try {
    fs.mkdirSync("workflows");
    assert.strictEqual(fileExists("workflows"), false);

    fs.writeFileSync(path.join("workflows", "ci.yml"), "name: CI");
    assert.strictEqual(fileExists("workflows"), true);
  } finally {
    process.chdir(original);
    fs.rmSync(dir, { recursive: true, force: true });
  }
});