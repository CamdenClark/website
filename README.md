# camden.sh

## Linking to an externally published post

Create a lightweight post entry using the external archetype:

```sh
hugo new content --kind external posts/my-post.md
```

Then set its `title`, `date`, and `external_url`, and change `draft` to `false`:

```toml
+++
date = '2026-08-22T12:00:00-07:00'
draft = false
title = 'My post'
external_url = 'https://sync.cheap/blog/my-post'
+++
```

External posts appear alongside local posts on the home page, archive, and tag
pages. The title links to the original URL and displays the source domain with
an external-link marker. Any optional Markdown below the front matter is used
as the summary/fallback content on camden.sh.
