---
layout: post.njk
title: 'My favorite new prompting trick: chat prefix completion'
---

I've been working with the Deepseek API while working on my tool [carrier.nvim](https://github.com/camdenclark/carrier.nvim).

It has a new beta feature that [[Anthropic]] also has that is really excellent, called chat prefix completion. You can just set what the assistant message response should start with.

This is really useful for contexts like code completion, where you want the model to always respond with just the code you want by starting the response with three backticks and a newline (essentially saying the assistant response should start a code block).

<https://platform.deepseek.com/api-docs/chat_prefix_completion>

This makes getting Just the Code back consistently really easy for my tool! I highly recommend you try this out in your applications, especially if you're asking for code completions.
