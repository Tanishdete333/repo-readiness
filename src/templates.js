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
function license(pkg) {
  const year = new Date().getFullYear();
  const author =
    typeof pkg.author === "string" && pkg.author
      ? pkg.author
      : "the project authors";

  return `MIT License

Copyright (c) ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;
}

function readme(pkg) {
  const name = pkg.name || "my-project";
  const description = pkg.description || "Describe what this project does.";
  const scripts = pkg.scripts || {};
  const runScript = scripts.dev
    ? "npm run dev"
    : scripts.start
      ? "npm start"
      : null;

  const lines = [
    `# ${name}`,
    "",
    description,
    "",
    "## Install",
    "",
    "```bash",
    "npm install",
    "```",
    "",
  ];

  if (runScript) {
    lines.push("## Usage", "", "```bash", runScript, "```", "");
  }

  if (hasRealTest(pkg)) {
    lines.push("## Tests", "", "```bash", "npm test", "```", "");
  }

  lines.push("## Contributing", "", "See [CONTRIBUTING.md](CONTRIBUTING.md).", "");

  return lines.join("\n");
}
module.exports = { contributing, gitignore, security, pullRequestTemplate, license, readme };