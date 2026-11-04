#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

if (command === "check") {
  console.log("Running check...");
} else if (command === "init") {
  console.log("Running init...");
} else {
  console.log("Unknown command. Try: repo-readiness check");
  process.exit(1);
}