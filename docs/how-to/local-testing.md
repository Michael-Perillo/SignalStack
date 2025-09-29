# Local Testing Guide

This guide covers how to test your SignalStack changes locally before pushing to GitHub.

## Quick Start

### 1. Basic Local Testing

```bash
# Run the full test suite (same as CI)
npm run ci:local

# Test and serve the built site locally
npm run validate:deploy
```

### 2. GitHub Actions Local Testing

Install prerequisites:

```bash
# Install act (if not already installed)
brew install act

# Install Docker Desktop (if not already installed)
brew install --cask docker
```

Run GitHub Actions locally:

```bash
# Test all workflows
npm run github:test

# Test deployment workflow (main branch pushes)
npm run github:test:deploy

# Test PR testing workflow
npm run github:test:pr
```

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run ci:local` | Run exact same tests as CI |
| `npm run test:pr` | Run PR testing suite (optimized for PRs) |
| `npm run validate:deploy` | Build and serve site locally |
| `npm run github:test` | Run all GitHub Actions workflows locally |
| `npm run github:test:deploy` | Test deployment workflow (main branch) |
| `npm run github:test:pr` | Test PR testing workflow |

## Testing Workflow

### Before Making Changes

1. **Start development server**: `npm start`
2. **Make your changes** to docs or configuration
3. **Test changes locally**: `npm run ci:local`

### Before Committing

1. **Run pre-commit checks**: `git add . && git commit -m "test"` (will run automatically)
2. **Test PR workflow**: `npm run github:test:pr`
3. **Validate deployment**: `npm run validate:deploy`

### Before Pushing to Main

1. **Final test**: `npm run ci:local`
2. **Test deployment workflow**: `npm run github:test:deploy`
3. **Push**: `git push`

## Troubleshooting

### Docker Issues

If Docker isn't found:

```bash
# Add Docker to PATH (if installed via Docker Desktop)
export PATH="/Applications/Docker.app/Contents/Resources/bin:$PATH"

# Or install via homebrew
brew install --cask docker
```

### Act Issues

If act fails:

```bash
# Pull the latest image
docker pull catthehacker/ubuntu:act-latest

# Clear act cache
act --rm
```

### Build Issues

If builds fail locally but pass in CI:

```bash
# Clear all caches
npm run clear
rm -rf node_modules package-lock.json
npm install

# Try again
npm run ci:local
```

## GitHub Actions Workflows

The CI/CD pipeline uses two separate workflows:

### 1. PR Testing Workflow (`test.yml`)

**Triggers**: Pull requests to main branch

**Purpose**: Fast feedback for pull requests

- ✅ TypeScript checking
- ✅ Markdown linting
- ✅ Link validation
- ✅ Build verification
- ✅ Size reporting
- 💬 PR comment with results

### 2. Deployment Workflow (`deploy.yml`)

**Triggers**: Pushes to main branch

**Purpose**: Production deployment

1. **Test Job**: Same as PR workflow for consistency
2. **Deploy Job**:
   - Build production site
   - Deploy to GitHub Pages
   - Verify deployment
   - Report deployment status

## Local vs CI Differences

| Aspect | Local | CI |
|--------|-------|-----|
| Environment | macOS/Linux/Windows | Ubuntu Latest |
| Node Version | System default | Node 20 |
| Cache | Local npm cache | GitHub Actions cache |
| Docker | Desktop version | GitHub-hosted runners |

Use `act` to test in an environment closer to CI before pushing.
