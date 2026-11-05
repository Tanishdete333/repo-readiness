#!/usr/bin/env node

const { fileExists } = require("../src/fileExists");
const { runChecks } = require("../src/score");
const { readPackage } = require("../src/readPackage");
const { writeFile } = require("../src/writeFile");
const { contributing, gitignore, security, pullRequestTemplate, license, readme } = require("../src/templates");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const MIN_SCORE = 70;

const args = process.argv.slice(2);
const command = args[0];

if (command === "check") {
  const { score, results } = runChecks();

  for (const result of results) {
    if (result.passed) {
      console.log(GREEN + "✓" + RESET, result.check.name);
    } else {
      console.log(RED + "✗" + RESET, result.check.name, "-", result.check.fix);
    }
  }

  console.log("\nScore:", score + "/100");

  if (score < MIN_SCORE) {
    process.exit(1);
  }
} else if (command === "init") {
  const pkg = readPackage();
  if (!pkg) {
    console.log("No package.json found. Run init inside a Node project.");
    process.exit(1);
  }

  const dryRun = args.includes("--dry-run");
  const before = runChecks().score;

   const files = [
    { path: "CONTRIBUTING.md", content: contributing(pkg) },
    { path: "SECURITY.md", content: security(pkg) },
    { path: ".gitignore", content: gitignore() },
    { path: ".github/PULL_REQUEST_TEMPLATE.md", content: pullRequestTemplate() },
    { path: "README.md", content: readme(pkg) },
    { path: "LICENSE", content: license(pkg) },
  ];

  for (const file of files) {
    if (fileExists(file.path)) {
      console.log("skipped", file.path, "(already exists)");
    } else if (dryRun) {
      console.log("would create", file.path);
    } else {
      writeFile(file.path, file.content);
      console.log("created", file.path);
    }
  }

  if (!dryRun) {
    const after = runChecks().score;
    console.log("\nScore:", before, "->", after);
  }
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}