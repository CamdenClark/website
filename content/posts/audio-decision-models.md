+++
date = '2026-11-04T21:50:30-08:00'
draft = false
title = 'Audio Judgment Models Are Jagged'
+++

Judgment models are great for fast, cheap interactions. One underexplored use case is low-latency voice interactions.

I wanted to create a flashcard program to help me learn Spanish. The experience I wanted was simple: I'd hear a word or phrase in English or Spanish and respond in the other language, depending on the drill. Then a system-one / judgment model would quickly grade my response. Existing tools like ChatGPT Live can be really slow and annoyingly conversational when I just want to drill vocabulary.

I experimented with [Clef-omni](https://blog.cloudflare.com/clef-faster-cheaper-multimodal/), one of the few judgment / system-one models with audio support. My impression so far is that not much effort went into training on audio inputs.

For example, if I was drilling the Spanish word for apple, "manzana," and said the word for tomorrow, "mañana," it would still grade my response as correct. Phrases were even trickier.

I want to create a benchmark for audio decision models that covers some of these issues. But for now, if you're considering judgment models for audio use cases, your options are pretty limited, and there's a lot of room for improvement.
