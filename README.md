# SignalStack

A framework for managing career data across time using a four-quadrant system: Facts, Narratives, Playbooks, and Signals.

**📖 [Read the Documentation](https://Michael-Perillo.github.io/SignalStack/)**

## Overview

SignalStack separates career data management into four distinct quadrants:

- **Facts** *(Seeds & Plants)*: Objective career data (jobs, skills, achievements)
- **Narratives** *(Soil & Growth Stories)*: Interpretive context and stories
- **Playbooks** *(Recipes)*: Rules for tailoring data to specific goals
- **Signals** *(Dishes Served)*: Final deliverables (resumes, CVs, portfolios)

## Development

This documentation site is built with [Docusaurus](https://docusaurus.io/) and deployed via GitHub Pages.

### Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run full test suite
npm test
```

### Available Commands

| Command | Purpose |
|---------|---------|
| `npm start` | Start development server |
| `npm run build` | Build production site |
| `npm run serve` | Serve built site locally |
| `npm test` | Run full test suite (TypeScript, linting, links, build) |
| `npm run ci:local` | Run CI tests locally |
| `npm run github:test:pr` | Test PR workflow locally |
| `npm run github:test:deploy` | Test deployment workflow locally |

### Testing & Quality

- **Pre-commit hooks**: Automatic testing before commits
- **TypeScript**: Type checking for all code
- **Markdown linting**: Consistent documentation formatting
- **Link validation**: No broken internal/external links
- **Local GitHub Actions**: Test workflows before pushing

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to `main`:

- **Live Site**: https://Michael-Perillo.github.io/SignalStack/
- **GitHub Actions**: Automated testing and deployment
- **Branch Protection**: All tests must pass before merge

### Project Structure

```
SignalStack/
├── docs/                 # Documentation content (Diátaxis framework)
│   ├── explanation/      # Understanding-oriented
│   ├── reference/        # Information-oriented
│   ├── how-to/          # Problem-solving oriented
│   └── tutorials/       # Learning-oriented
├── src/                 # React components and pages
├── .github/workflows/   # CI/CD automation
└── package.json        # Dependencies and scripts
```

### Contributing

1. **Fork and clone** the repository
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Make changes** and test locally: `npm run ci:local`
4. **Test workflows**: `npm run github:test:pr`
5. **Commit with pre-commit hooks**: `git commit -m "Description"`
6. **Push and create PR**: Tests run automatically

### Local Testing Guide

coming soon