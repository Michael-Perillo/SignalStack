# Playbooks *(Recipes)*

## Definition

**Playbooks** are the rules and filters you apply to your facts when assembling a career artifact for a specific goal. They turn raw data into a tailored selection.

A playbook may include:

- **Skill Requirements**: must include achievements involving Go and Kubernetes
- **Date Filters**: only show experiences from the last 4 years
- **Metric Thresholds**: prioritise bullets where the impact is ≥ 20%
- **Section Limits**: maximum 6 work experiences, 3 bullets each

Playbooks also manage order (e.g. reverse-chronological for a resume, thematic for a portfolio) and adjust the presence of certain data (e.g. include GPA for internships but omit it for senior roles).

## Education Example

- **Rule**: "If the target role is senior, omit GPA and coursework; if the role is entry-level, include GPA ≥ 3.5 and relevant courses."

## Best Practices

- Align filters with keywords from the job description and ensure the final output is **ATS-friendly**
- Tie each bullet to skills or competencies required in the role
- Balance recency and relevance: emphasise the last 5 years for most resumes; include older experiences in CVs or portfolios
- Codify rules in a human-readable format (YAML/JSON) so they can be reused

## Quality Checks

- Do the selected bullets align with the job description?
- Have you removed irrelevant or outdated information?
- Is the resulting document the right length (e.g. 1 page for a resume)?
- Is every bullet still anchored in a fact?

## Analogy

In the garden & harvest analogy, **playbooks** are the **recipes**. They tell you which **seeds and plants** to pick, how to combine them and in what order—so you produce a dish tailored to your dinner guests.