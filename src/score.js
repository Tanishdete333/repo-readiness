const { fileExists } = require("./fileExists");
const { checks } = require("./checks");

function runChecks() {
  let obtained = 0;
  let total = 0;
  const results = [];

  for (const check of checks) {
    const passed = check.files.some(fileExists);
    total = total + check.points;
    if (passed) {
      obtained = obtained + check.points;
    }
    results.push({ check, passed });
  }

  const score = Math.round((obtained / total) * 100);
  return { score, results };
}

module.exports = { runChecks };