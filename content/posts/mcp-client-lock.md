+++
date = '2026-08-02T20:50:42-07:00'
draft = false
title = 'Do not client lock your MCP server'
+++

An emerging trend for some service providers is to lock their MCP server
to only some clients (usually Claude). Servers using this pattern will block
your attempts to connect using another client (say, Codex, ChatGPT, Hermes, 
etc.).

One example is [Strava](https://support.strava.com/en-us/articles/15401531-strava-mcp-connector) but there are other offenders.

The mechanism for this is sometimes just a filter on `User-Agent`, but
another way to prevent this is to use OAuth authentication and do not
allow dynamic client registration.

I understand the motivation here: let's launch an MCP server, we
can make sure the experience for many of our users using one client is great
and then maybe move on.

Ultimately, this is just frustrating for your users. They want to connect to
your service and get value out of it. Why are you putting these artificial
barriers in front of them?

Don't do this! Open your MCP up to all clients and focus on the core of your
product.
