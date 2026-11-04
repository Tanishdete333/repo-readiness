#!/usr/bin/env node

const { fileExists } = require("../src/fileExists");
const { checks } = require("../src/checks");
const { readPackage } = require("../src/readPackage");

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const MIN_SCORE = 70;

const args = process.argv.slice(2);
const command = args[0];

if (command === "check") {
  let obtained = 0;
  let total = 0;

  for (const check of checks) {
    const passed = check.files.some(fileExists);
    total = total + check.points;

    if (passed) {
      obtained = obtained + check.points;
      console.log(GREEN + "✓" + RESET, check.name);
    } else {
      console.log(RED + "✗" + RESET, check.name, "-", check.fix);
    }
  }

  const score = Math.round((obtained / total) * 100);
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
    console.log("Name:", pkg.name);
  console.log("Description:", pkg.description);
  console.log("Scripts:", pkg.scripts);
  
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}