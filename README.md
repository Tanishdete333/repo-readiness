# repo-readiness

Check how ready your repo is for contributors, then generate the missing files.



## Why

New contributors leave when a repo has no README, license, contributing guide or templates. `repo-readiness` scores your repo, shows what's missing, and can create the missing files, filled in from your own `package.json` (real name, real scripts). It never overwrites a file you already have.

## Quick start

```bash
npx repo-readiness check
npx repo-readiness init --dry-run
npx repo-readiness init
```

## Install

You don't have to install it. Use `npx`, or install it globally:

```bash
npm install -g repo-readiness
```

## What it checks

README, LICENSE, contributing guide, code of conduct, security policy, issue templates, pull request template, CI workflow and `.gitignore`.

It also warns about a few common problems: a placeholder README, a README with no install instructions or code block, and a `.env` file that is not in `.gitignore`.

## Example

```text
✓ README
✗ LICENSE - Add a LICENSE file so others know how they can use your code.
✗ Contributing guide - Add CONTRIBUTING.md explaining how to set up and submit changes.
...

Score: 22/100
```

## Commands

| Command | What it does |
|---|---|
| `repo-readiness check` | Scores your repo and lists what's missing |
| `repo-readiness check --json` | Same, as JSON |
| `repo-readiness init` | Creates the missing files |
| `repo-readiness init --dry-run` | Shows what would be created, writes nothing |

## Use it in CI

`check` exits with code 1 when the score is below 70, so it can fail a build:

```yaml
- run: npx repo-readiness check
```

## Limitations

- It only checks local files. It does not call the GitHub API.
- It only looks at the folder you run it in, not subfolders.
- `init` reads `package.json`, so it currently supports Node projects.
- It checks that files exist, not that they are good.
- Generated files are drafts. Read them before committing. The generated `SECURITY.md` assumes GitHub's private vulnerability reporting is turned on.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT