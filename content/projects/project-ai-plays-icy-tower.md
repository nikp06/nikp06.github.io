+++
title = "Training Neural Networks to play Icy Tower using Reinforcement Learning"
date = "2021-07-13T10:50:45+01:00"
author = "Niklas Petersen"
coversmall = "img/project-ai-plays-icy-tower/training.gif"
contenttype = "project"
# link = "/posts/2023/03/building-a-step-function-with-error-handling-in-aws-with-terraform/"
description = "For this project I have programmed the game Icy Tower and used reinforcement learning and a genetic algorithm to iteratively train neural networks to master it. After many generations of neuro-evolution the algorithm produced genomes that played the game better than I could."
tags = ["Reinforcement Learning", "Deep Learning", "Genetic Algorithm", "Real-Time", "Streaming", "Visualization", "Python", "Neuro-Evolution"]
keywords = ["Icy Tower", "Reinforcement Learning", "Deep Learning", "Genetic Algorithm", "Real-Time", "Streaming", "Visualization", "Python", "Neuro-Evolution"]
showFullContent = false
readingTime = true
hideComments = false
toc = true
postinfo = true
+++

## Introduction
My fascination for Machine Learning and it's capabilities sparked with famous breakthrough-projects, where machines learned to play various (video-)games.
Watching [AlphaGo defeat Lee Sedol](https://www.youtube.com/watch?v=WXuK6gekU1Y) was when I first saw, how algorithms could master a complex game with endless possibilities like Go or Chess and even learn something like intuition. Projects like [DeepMind’s AlphaStar](https://www.youtube.com/watch?v=cUTMhmVh1qs&t=1371s) pushed the boundaries of AI even further by teaching machines to strategize, adapt, and even collaborate. These breakthroughs inspired me to make my own attempts of using ML to train neural networks to play games.

So this post will be a short breakdown of how I trained neural networks with neuro-evolution to play the game Icy Tower in real-time using reinforcement learning and a genetic algorithm called [NEAT](https://neat-python.readthedocs.io/en/latest/neat_overview.html). Also watch my [YouTube-Video](https://www.youtube.com/watch?v=W6qyRbmr_aA) explaining this approach, if you like.
Even though I was still a novice to machine learning back when I started this project in 2021 and the code is a mess, I am still very proud of my achievement.
What made me even more proud at the time, was that the creator of the legendary game Icy Tower [Johann Peitz](https://x.com/johanpeitz) acknowledged my project.
{{< twitter user="johanpeitz" id="1412823539875516421" >}}

## Rebuilding Icy Tower from Scratch

Before I could even start training an AI, I first had to rebuild the game itself. Icy Tower, originally published in 2001 by Free Lunch Design, is a fun childhood memory for me. Essentially you have to jump from platform to platform to get up an icy tower and manage to be faster than the advancing screen.
For this project, I created a clone of the game focussing on the essentials:

- Getting the physics to feel right was crucial: momentum affects jump height in Icy Tower, meaning higher horizontal speed yields higher jump.
- Bouncing off walls: Harold bounces off walls without losing speed.
- Scoring system and advancing screen: For each platform Harold receives point and when the screen catches him its game over.
- The visuals, especially the character Harold the Homeboy and the Tower setting, were important for me personally in order to recreate the nostalgic feel of the game.

## From Zero to AI Hero: How the AI Sees the Game

Now I needed Harold to have a brain. The first step was to decide on the crucial information, that the AI needs to have about itself and its surroundings.
At every frame, the AI-controlled Harold is given a snapshot of the world around him:

- His own x/y position
- Current horizontal and vertical velocity
- The position and size of 11 nearby platforms
- Whether he is currently standing on a platform

In total, each neural network processes 38 inputs to decide on one of three actions: jump, move left, or move right.

## Training with NEAT: Evolving Better Players

Since no "right" moves are provided beforehand, I used reinforcement learning: rewarding individuals for climbing higher and staying alive longer.

The algorithm behind this was NEAT (NeuroEvolution of Augmenting Topologies). Instead of training a fixed network, NEAT evolves both the weights and the network structure over generations. 
Simply put - the idea is to throw as many individual Harolds as the hardware allows with slightly different "brains" into this arena and let them figure out the best strategy for winning. It uses:

- **Fitness evaluation**: rewarding individuals that climb higher. This basically gives "winning" a numerical value and let's Harold know, what the goal is.
- **Reproduction and mutation**: combining and mutating successful networks.
- **Speciation**: preserving innovation by grouping similar networks.

## Watching Evolution in Action

At the start, 500 random AIs wildly jumped around without any real strategy.
But soon, one individual accidentally figured out that gaining horizontal momentum before jumping allowed it to reach higher platforms.

From there:

- **Generation 3**: Some AIs aimed for platforms intentionally.
- **Generation 5**: A new strategy emerged — wall-bouncing to gain extra height.
- **Generation 10–20**: Wall-bouncing became dominant, with new "species" of strategies appearing.

Over time, fitness values steadily increased, with the best individuals reaching platform **600** and beyond.

## Hitting a Local Maximum

By Generation 15, progress slowed. It seemed that most individuals had optimized for the current strategy, but weren't innovating further.
Even though some complex behaviors did emerge, more ambitious strategies didn’t survive — likely because the environment was too random and the rewards for exploration were too sparse.

Still, after 50+ generations, some AIs managed to reach **platform 870** — far higher than I ever got manually playing!

## What I Learned

This project taught me a lot:

- Rebuilding a game from scratch was a super fun and taught me a lot about coding in general.
- NEAT is powerful but might have its limitations in more complex environments.
- Fitness functions and reward design are crucial — if you don't reward exploration properly, populations will get stuck in local maxima.
- Watching AI learn and evolve in real-time is still one of the most fascinating things I’ve ever experienced.

Would I do things differently today? Absolutely. But back then, this project showed me that even a simple setup can create surprisingly intelligent behavior over time.

If you're curious, feel free to watch my full [YouTube Breakdown](https://www.youtube.com/watch?v=W6qyRbmr_aA) of the project!
