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

## Embedding audio

Use the `audio` shortcode with a recording URL and descriptive caption:

```go-html-template
{{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/manana-manzana.mp3" caption="mañana (tomorrow)" >}}
```

The player uses native browser controls with a fixed 40px height. It fills its
container (14rem wide in tables) and loads audio only when requested.
Raw HTML does not need to be enabled in Markdown.

Use the `judgment` shortcode beside a player in a Markdown table to display
Clef-omni's decision and a grading badge:

```markdown
| Expected answer | Recording | P(correct) | Clef-omni's judgment |
| --- | --- | --- | --- |
| manzana (apple) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/manana-manzana.mp3" caption="mañana (tomorrow)" >}} | 0.8933 | {{< judgment decision="Accepted" grade="wrong" >}} |
```

`grade="right"` or `grade="wrong"` describes the model's grading, not the spoken
answer. A correctly rejected wrong answer uses `decision="Rejected" grade="right"`.
Tables containing audio players scroll horizontally when needed on narrow screens.
