---
layout: post.njk
title: 'Getting Claude Code to Work with AWS Bedrock'
---

Getting Claude Code to work with AWS Bedrock requires some configuration that isn't obvious from the documentation. Here's what I learned after working through a few issues.

## The Solution

The key was combining multiple environment variables and properly exporting AWS credentials. Here's the shell script I created to make it all work:

```bash
#!/bin/zsh

# Set AWS credentials from profile
eval "$(aws configure export-credentials --profile ravenna-staging --format env)"

# Set environment variables
export AWS_REGION=us-west-2
export CLAUDE_CODE_USE_BEDROCK=1
export ANTHROPIC_MODEL='us.anthropic.claude-3-7-sonnet-20250219-v1:0'
export DISABLE_PROMPT_CACHING=1

# Launch Claude with all arguments passed to this script
claude "$@"
```

## Critical Components

There were two critical parts to making this work:

1. **Exporting AWS credentials** from an existing profile into the current terminal environment
2. **Setting the AWS_REGION** explicitly (even if your default AWS region is set in your config)

Sources:
- [GitHub issue #6](https://github.com/anthropics/claude-code/issues/6#issuecomment-2680841040)
- [GitHub issue #93](https://github.com/anthropics/claude-code/issues/93#issuecomment-2685165687)
