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

function gitignore() {
  const lines = [
    "node_modules",
    "",
    ".env",
    ".env.local",
    "",
    "*.log",
    "dist",
    ".DS_Store",
    "",
  ];
  return lines.join("\n");
}

function security(pkg) {
  const name = pkg.name || "this project";
  const lines = [
    "# Security Policy",
    "",
    `If you find a security issue in ${name}, please do not open a public issue.`,
    "",
    "Instead, report it privately through the Security tab of this repository on GitHub.",
    "",
    "We will respond as soon as we can.",
    "",
  ];
  return lines.join("\n");
}

function pullRequestTemplate() {
  const lines = [
    "## What does this change?",
    "",
    "",
    "## How did you test it?",
    "",
    "",
    "## Checklist",
    "",
    "- [ ] I ran the project and it works",
    "- [ ] I updated the docs if needed",
    "",
  ];
  return lines.join("\n");
}
module.exports = { contributing, gitignore, security, pullRequestTemplate };