# MDC Rules Organization

## Overview
This rule ensures that all new MDC (Model-Driven Code) rules are properly organized and stored in the `.cursor/rules` directory.

## Rule Requirements

### File Organization
- **Location**: All MDC rules must be created in the `.cursor/rules` directory
- **File Structure**: Each rule should be a separate file with a descriptive name
- **File Extension**: Use `.md` extension for all MDC rule files
- **Naming Convention**: Use kebab-case for file names (e.g., `component-structure.md`, `code-style.md`)

### File Content Structure
Each MDC rule file should follow this structure:

```markdown
# [Rule Name]

## Overview
Brief description of what this rule accomplishes.

## Requirements
- Specific requirements and constraints
- Code patterns to follow
- Examples of correct implementation

## Examples
```typescript
// Example of correct implementation
```

## Exceptions
Any exceptions or special cases to consider.
```

### Directory Structure
```
.cursor/
└── rules/
    ├── mdc-rules-organization.md  # This file
    ├── component-structure.md     # Example rule
    ├── code-style.md             # Example rule
    └── [other-rules].md          # Additional rules
```

## Implementation Guidelines

### When Creating New Rules
1. **Always create in `.cursor/rules/`**: Never create MDC rules in other directories
2. **Use separate files**: Each rule should be its own file, not combined with others
3. **Follow naming convention**: Use descriptive, kebab-case names
4. **Include proper documentation**: Each rule should be self-contained and well-documented

### File Naming Examples
- `react-component-patterns.md`
- `typescript-best-practices.md`
- `styling-guidelines.md`
- `testing-standards.md`
- `performance-optimization.md`

### Content Guidelines
- Keep rules focused and specific
- Include practical examples
- Provide clear, actionable guidance
- Reference existing code patterns when applicable
- Include exceptions and edge cases

## Enforcement
- This rule applies to all new MDC rule creation
- Existing rules should be moved to this directory if they exist elsewhere
- All team members should follow this organization structure
- Regular reviews should be conducted to ensure compliance

## Benefits
- **Consistency**: All rules are in one location
- **Maintainability**: Easy to find and update rules
- **Scalability**: Simple to add new rules as needed
- **Team Collaboration**: Clear structure for team members
- **Version Control**: Rules are properly tracked in git
