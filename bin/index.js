#!/usr/bin/env node
  const { fileExists } = require("../src/fileExists");
const args = process.argv.slice(2);
const command = args[0];

if (command === "check") {
     console.log("package.json:", fileExists("package.json"));
   console.log("README.md:", fileExists("README.md"));
} else if (command === "init") {
  console.log("Running init...");
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}