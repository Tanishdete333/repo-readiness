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
];

module.exports = { checks };