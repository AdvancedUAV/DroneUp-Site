# Cursor MDC Rules Directory

This directory contains all Model-Driven Code (MDC) rules for the DroneUp project. These rules help maintain code consistency, quality, and best practices across the codebase.

## Directory Structure

```
.cursor/rules/
├── README.md                    # This file
├── mdc-rules-organization.md    # Rule for organizing MDC rules
├── auto-commit-changes.md       # Rule for automatic Git commits
└── [other-rules].md            # Additional MDC rules
```

## How to Use

### Creating New Rules
1. Create a new `.md` file in this directory
2. Follow the naming convention: `kebab-case.md`
3. Use the standard structure defined in `mdc-rules-organization.md`
4. Include clear examples and documentation

### Rule Structure
Each rule should follow this template:

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

## Current Rules

- **mdc-rules-organization.md**: Ensures all MDC rules are properly organized in this directory
- **auto-commit-changes.md**: Automatically commits changes after Cursor modifications using conventional commit format
- *[Additional rules will be listed here as they are created]*

## Best Practices

1. **Keep rules focused**: Each rule should address a specific concern
2. **Include examples**: Provide clear, practical examples
3. **Document exceptions**: Clearly state when rules don't apply
4. **Regular updates**: Review and update rules as the project evolves
5. **Team collaboration**: Share and discuss rules with team members

## Contributing

When adding new rules:
1. Follow the established structure
2. Include comprehensive documentation
3. Provide practical examples
4. Consider edge cases and exceptions
5. Update this README with new rule information

## Questions?

If you have questions about MDC rules or this directory structure, refer to the `mdc-rules-organization.md` file for detailed guidelines.
