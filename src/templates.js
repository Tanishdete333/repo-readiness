function hasRealTest(pkg) {
  const test = pkg.scripts && pkg.scripts.test;
  return Boolean(test) && !test.includes("no test specified");
}

function contributing(pkg) {
  const name = pkg.name || "this project";

  const testStep = hasRealTest(pkg)
    ? "Run the tests: `npm test`"
    : "There are no tests yet, so adding some is a great first contribution!";

  const lines = [
    `# Contributing to ${name}`,
    "",
    "Thanks for your interest in contributing!",
    "",
    "## Setup",
    "",
    "1. Fork and clone the repository.",
    "2. Install dependencies: `npm install`",
    `3. ${testStep}`,
    "",
    "## Submitting changes",
    "",
    "1. Create a branch: `git checkout -b my-change`",
    "2. Make your change and commit it.",
    "3. Push your branch and open a pull request.",
    "",
  ];

  return lines.join("\n");
}

module.exports = { contributing };