const checks = [
  {
    id: "readme",
    name: "README",
    files: ["README.md", "README"],
    points: 10,
    fix: "Add a README.md explaining what your project does.",
  },
  {
    id: "license",
    name: "LICENSE",
    files: ["LICENSE", "LICENSE.md", "LICENSE.txt"],
    points: 10,
    fix: "Add a LICENSE file so others know how they can use your code.",
  },
  {
    id: "contributing",
    name: "Contributing guide",
    files: ["CONTRIBUTING.md"],
    points: 10,
    fix: "Add CONTRIBUTING.md explaining how to set up and submit changes.",
  },
    {
    id: "code-of-conduct",
    name: "Code of conduct",
    files: ["CODE_OF_CONDUCT.md"],
    points: 10,
    fix: "Add CODE_OF_CONDUCT.md to set community expectations.",
  },
  {
    id: "security",
    name: "Security policy",
    files: ["SECURITY.md", ".github/SECURITY.md"],
    points: 10,
    fix: "Add SECURITY.md so people know how to report vulnerabilities.",
  },
  {
    id: "issue-templates",
    name: "Issue templates",
    files: [".github/ISSUE_TEMPLATE"],
    points: 10,
    fix: "Add issue templates in .github/ISSUE_TEMPLATE.",
  },
  {
    id: "pr-template",
    name: "Pull request template",
    files: [".github/PULL_REQUEST_TEMPLATE.md", "PULL_REQUEST_TEMPLATE.md"],
    points: 10,
    fix: "Add .github/PULL_REQUEST_TEMPLATE.md to standardize reviews.",
  },
  {
    id: "ci",
    name: "CI workflow",
    files: [".github/workflows"],
    points: 10,
    fix: "Add a GitHub Actions workflow in .github/workflows.",
  },
  {
    id: "gitignore",
    name: ".gitignore",
    files: [".gitignore"],
    points: 10,
    fix: "Add a .gitignore so junk files stay out of git.",
  },
];

module.exports = { checks };