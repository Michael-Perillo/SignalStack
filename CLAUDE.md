# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SignalStack is a framework for managing career data across time. The end goal is a Docusaurus site deployed via GitHub Pages.

## SignalStack Architecture

SignalStack implements a four-quadrant matrix system for organizing professional career data:

### The Four Quadrants

1. **Facts (Seeds & Plants)** - Objective, raw career data
   - Employment history, titles, dates, employers
   - Quantified achievements and metrics
   - Education, certifications, skills
   - Located in `/docs/facts.md`

2. **Narratives (Soil & Growth Stories)** - Interpretive context around facts
   - STAR stories for interview preparation
   - Case studies of major projects
   - Lessons learned essays and reflections
   - Located in `/docs/narratives.md`

3. **Playbooks (Recipes)** - Rules for tailoring facts to specific goals
   - Skill requirements and filters
   - Date ranges and metric thresholds
   - Section limits and ordering rules
   - Located in `/docs/playbooks.md`

4. **Signals (Dishes Served)** - Final deliverables created from other quadrants
   - Resumes, CVs, cover letters
   - Portfolio pages, LinkedIn summaries
   - Located in `/docs/signals.md`

## Current State

The repository currently contains:
- Documentation framework in `/docs/` directory
- Core conceptual documentation for the four-quadrant system
- Framework matrix explanation (`/docs/framework-matrix.md`)
- Overview of the entire system (`/docs/overview.md`)

## Development Environment

This is currently a documentation-only repository. No package.json, build tools, or development dependencies are present yet. When the Docusaurus implementation begins, standard Node.js/npm tooling will likely be added.

## Key Principles

- **Separation of Concerns**: Each quadrant serves a distinct purpose
- **ATS-Friendly Output**: Final signals must be compatible with Applicant Tracking Systems
- **Measurable Outcomes**: Use strong action verbs and quantified results
- **Structured Data**: Maintain facts in structured formats (YAML, CSV, database)
- **Reverse-Chronological Order**: Default ordering for employment history
- **Garden Analogy**: SignalStack uses a garden/harvest metaphor throughout

## Future Implementation

SignalStack is designed to be implemented as a Docusaurus site that will:
- Allow users to input and manage their career data
- Apply playbook rules to generate tailored outputs
- Export professional documents in various formats
- Deploy via GitHub Pages