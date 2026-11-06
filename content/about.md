+++
title = 'About'
date = '2026-03-07'
+++

I'm a Seattle-based senior software engineer who builds AI products end to end—from data integrations and backend services to the interfaces people use. I work best in a tight feedback loop with customers: shipping, learning from real usage, and iterating.

I'm currently at **Artemis Software Works**, where I've built our evaluation framework and sandboxed code execution environment for customers. Previously, at **Amperity**, I built an AI Query Assistant used by 70% of the query engine's users.

Outside of work I play rec league hockey.

## Talks

- [OpenAI DevDay 2024 with Joyce Gordon](https://www.youtube.com/watch?v=JCh30k5ZXzo) — Using LLMs to turn natural-language questions into SQL.
- [Real-World ClickHouse: Stories from Builders & Operators](https://www.youtube.com/watch?v=GGnmeJJVlBo) — ClickHouse Seattle Meetup, 2026

## Experience

**Artemis Software Works** — Senior Software Engineer *(Mar 2026 – Present)*
- Built an evaluation framework that let the team quickly upgrade model versions and switch models
- Built a sandboxed code execution environment that enabled customers to iterate on PowerPoint presentations, upload Excel spreadsheets, and work with Word documents
- Increased the prompt cache hit rate from 0% to 90%, reducing cost and latency for users

**Ravenna** — Software Engineer *(Mar 2025 – Mar 2026)*
- Designed and built the knowledge source retrieval system, fetching thousands of pages from Notion, Confluence, Coda, and Google Drive within seconds
- Moved the retrieval pipeline to Temporal to improve reliability
- Cut Next.js per-page build times down to 2 seconds and reduced CI/CD times by 50% with smarter caching and monorepo tooling
- Adopted Claude Code on day one and built the tooling and workflows that got 90% of Ravenna engineers using it daily

**Amperity** — Senior Software Engineer, GenAI *(Sep 2023 – Feb 2025)*
- Built the AI Query Assistant, now used by 70% of Amperity's query engine users
- Designed AmpAI, which answers marketer questions by generating and running SQL against Amperity's data assets
- Built and owned the LLM microservice, including integration tests, latency metrics, and 5xx alerting
- Spoke at OpenAI DevDay; co-authored blog posts with Databricks

**Amperity** — Software Engineer II, UI *(Sep 2022 – Sep 2023)*
- Designed a new data-fetching abstraction that reduced implementation time and eliminated common pitfalls
- Migrated 100 dialogs to a new component system I designed
- Halved CI build times and stood up an on-call rotation for tracking build and customer-facing errors

**Amperity** — Software Engineer II, Connectors *(Sep 2020 – Sep 2022)*
- Improved match rates by 20% for ads connectors via phone and address normalization
- Reduced new connector implementation time by a month with a reusable project template
- Conducted 50+ engineering interviews and mentored/onboarded 5 engineers

**Amperity** — Software Engineer I *(Jun 2019 – Sep 2020)*

**Schweitzer Engineering Laboratories** — Associate Software Engineer *(Oct 2017 – Apr 2019)*
- Built a React + C# CMS from scratch supporting hundreds of thousands of product configurations
- Reduced factory floor scan latency by 90%

**Google Summer of Code** *(May 2017 – Sep 2017)*
- Contributed to NetLogo Web, building import/export of world state

## Projects

- [monty-go](https://github.com/CamdenClark/monty-go) *(2026)* — A Go client for Pydantic Monty that runs sandboxed Python in crash-isolated workers, with support for host functions and resumable snapshots.
- [gcrunner](https://github.com/CamdenClark/gcrunner) *(2026)* — Runs self-hosted GitHub Actions jobs on ephemeral Google Cloud VMs that are automatically created and torn down for each job.
- [Jira MCP](https://github.com/CamdenClark/jira-mcp) *(2024)* — An MCP server that lets AI assistants search Jira issues with JQL and retrieve issue details.
- [Anki MCP Server](https://github.com/CamdenClark/anki-mcp-server) *(2024)* — An MCP server that lets AI assistants browse Anki decks and create flashcards through AnkiConnect.
- [Flyboy](https://github.com/CamdenClark/flyboy) *(2023)* — A lightweight Neovim plugin for chatting with ChatGPT directly in editor buffers, with streaming responses and customizable prompt templates.

## Education

**University of Idaho** — B.S. in Mathematics

## Skills

- **Languages:** Python, TypeScript, JavaScript, Lua
- **AI engineering:** Retrieval systems, text-to-SQL, LLM integration (OpenAI, Anthropic, open-weight models)
- **Data & storage:** PostgreSQL, S3, Azure Blob Storage
- **Infrastructure & delivery:** Cloudflare Workers, Durable Objects, Temporal, Terraform, CI/CD
