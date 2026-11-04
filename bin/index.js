#!/usr/bin/env node

const { fileExists } = require("../src/fileExists");
const { checks } = require("../src/checks");

const args = process.argv.slice(2);
const command = args[0];

if (command === "check") {
  for (const check of checks) {
    const passed = check.files.some(fileExists);
    console.log(passed ? "✓" : "✗", check.name);
  }
} else if (command === "init") {
  console.log("Running init...");
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}