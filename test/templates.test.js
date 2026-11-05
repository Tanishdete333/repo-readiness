const test = require("node:test");
const assert = require("node:assert");
const { contributing, readme } = require("../src/templates");

const PLACEHOLDER_TEST = 'echo "Error: no test specified" && exit 1';

test("contributing mentions npm test only when a real test script exists", () => {
  const withTest = contributing({ name: "demo", scripts: { test: "jest" } });
  const withoutTest = contributing({ name: "demo", scripts: { test: PLACEHOLDER_TEST } });

      assert.ok(withTest.includes("npm test"));
  assert.ok(!withoutTest.includes("npm test"));
});

test("readme uses a fallback when the description is missing", () => {
  const text = readme({ name: "demo" });
  assert.ok(text.includes("Describe what this project does."));
});

test("readme shows Usage only when a dev or start script exists", () => {
  const withDev = readme({ name: "demo", scripts: { dev: "node server.js" } });
  const withoutScripts = readme({ name: "demo" });

  assert.ok(withDev.includes("npm run dev"));
  assert.ok(!withoutScripts.includes("## Usage"));
});