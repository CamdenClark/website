+++
date = '2026-11-06'
draft = false
title = "Cloudflare's System-One Model Clef-omni Has Trouble with Spanish"
+++

In [my last post](/posts/audio-decision-models/), I wrote about trying to use an audio judgment model to grade Spanish flashcards. I'm in a Spanish class right now and I figured it would be an interesting use of the new judgment models to try to create a low-latency experience for learning Spanish.

When I got into working on this, I learned that there are pretty limited options for audio judgment models. Clef-omni is really the only game in town.

I tried it out and it mostly works. But Clef-omni sometimes accepted the Spanish word for tomorrow when I was asking for apple.

I wanted to write a benchmark to show some of the jaggedness here and where you might run into issues when doing quick judgments in response to audio. Here's [the full list of benchmarks](https://audio-judgment-benchmarks.camdenclark.workers.dev/) so you can listen to the recordings and see the model's judgments. Here are a few of the failures.

## What I'm testing

[Clef-omni](https://blog.cloudflare.com/clef-faster-cheaper-multimodal/) is a multimodal decision model. Instead of generating a conversational response, it can take audio and return a score for a question like “Did the speaker answer this flashcard correctly?” That's the appeal for a low-latency vocabulary drill.

For these examples, I generated synthetic speech with `openai/gpt-audio-mini` and `openai/gpt-audio` through OpenRouter, then sent the audio, the drill, and the expected answer to `@cf/cloudflare/clef-omni`. The requested speech script was not supplied to the judge. Its instructions included:

> Reject different words, changed numbers, or missing negation; tolerate natural accent variation.

The page treats P(correct) scores of 0.5 or higher as correct. The speech labels are the scripts requested from the generator, not independently verified transcriptions; the recordings are embedded below so you can listen yourself.

## Similar sounds, different words

These are the saved judgments for three wrong answers and two correct answers. The badges below show whether Clef-omni's grade was right or wrong.

| Expected answer | Recording (requested speech) | P(correct) | Clef-omni's judgment |
| --- | --- | --- | --- |
| manzana (apple) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/manana-manzana.mp3" caption="mañana (tomorrow)" >}} | 0.8933 | {{< judgment decision="Accepted" grade="wrong" >}} |
| manzana (apple) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/manzana-control.mp3" caption="manzana (apple)" >}} | 0.9803 | {{< judgment decision="Accepted" grade="right" >}} |
| casa (house) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/cosa-casa.mp3" caption="cosa (thing)" >}} | 0.9185 | {{< judgment decision="Accepted" grade="wrong" >}} |
| casa (house) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/casa-control.mp3" caption="casa (house)" >}} | 0.987 | {{< judgment decision="Accepted" grade="right" >}} |
| hambre (hunger) | {{< audio src="https://audio-judgment-benchmarks.camdenclark.workers.dev/audio/hambre-hombre.mp3" caption="hombre (man)" >}} | 0.9421 | {{< judgment decision="Accepted" grade="wrong" >}} |

## What this tells me

These are synthetic clips but they show some clear failure modes. Under non-synthetic conditions they perform just slightly worse, but even using synthetic voices show some of the gaps of the existing judgment / system-one models.

Make sure you're benchmarking your use cases, especially for things that are off the beaten path like multimodality.
