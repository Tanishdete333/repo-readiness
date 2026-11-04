#!/usr/bin/env node

const { fileExists } = require("../src/fileExists");
const { checks } = require("../src/checks");

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
      console.log("✓", check.name);
    } else {
      console.log("✗", check.name, "-", check.fix);
    }
  }

  const score = Math.round((obtained / total) * 100);
  console.log("\nScore:", score + "/100");
} else if (command === "init") {
  console.log("Running init...");
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}