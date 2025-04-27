+++
title = "Training a Neural Network to play Subway Surfers using Computer Vision"
date = "2021-09-15"
author = "Niklas Petersen"
coversmall = "img/project-ai-plays-subway-surfers/cnn.gif"
contenttype = "project"
# link = "/posts/2023/03/building-a-step-function-with-error-handling-in-aws-with-terraform/"
description = "Using computer vision and a convolutional neural network (CNN) a model was trained to play the game Subway Surfers. It learned from my own playing, through which I have created and augmented a dataset from which it could induce the best moves to make based on what was happening in the game in real-time."
tags = ["Computer Vision", "CNN", "Deep Learning", "Data Augmentation", "Real-Time", "Streaming", "Visualization", "Python"]
keywords = ["Subway Surfers", "Computer Vision", "CNN", "Deep Learning", "Data Augmentation", "Real-Time", "Streaming", "Visualization", "Python"]
showFullContent = false
readingTime = true
hideComments = false
toc = true
postinfo = true
+++

## Introduction
My fascination for Machine Learning and it's capabilities sparked with famous breakthrough-projects, where machines learned to play various (video-)games.
Watching [AlphaGo defeat Lee Sedol](https://www.youtube.com/watch?v=WXuK6gekU1Y) was when I first saw, how algorithms could master a complex game with endless possibilities like Go or Chess and even learn something like intuition. Projects like [DeepMind’s AlphaStar](https://www.youtube.com/watch?v=cUTMhmVh1qs&t=1371s) pushed the boundaries of AI even further by teaching machines to strategize, adapt, and even collaborate. These breakthroughs inspired me to make my own attempts of using ML to train neural networks to play games.

Even though I was still a rookie in terms of machine learning back when I started this project in 2021 and the code isn't great, I am still very proud of my achievement.
So here is a breakdown of how I trained a neural network to play the game Subway Surfers in real-time using a convolutional neural network (CNN) and computer vision.
Also watch my [YouTube-Video](https://www.youtube.com/watch?v=ZVSmPikcIP4) explaining this approach, if you like.
{{< youtube ZVSmPikcIP4 >}}

## Project Overview

In this project, I set out to train an AI agent to play Subway Surfers, the popular endless runner game. Instead of relying on the game's internal data (like speed, position, or obstacle distance), I trained a Convolutional Neural Network (CNN) to predict actions purely based on pixel data — the game's screenshots. Sidenote: If I had access to internal data, I could have made use of other techniques such as reinforcement learning, like I did when [I trained an AI (or rather an AI trained itself) to play Icy Tower]({{% ref "projects/project-ai-plays-icy-tower" %}}).

Subway Surfers has a relatively simple action space with just five possible moves: jump, roll, move left, move right, or do nothing. This limited set of actions made the project feasible, even though I had no access to the game's source code or internal state.

## How It Works

Since the only information available was the game's visual output, I captured real-time screenshots while playing the game myself. The goal was, to teach the AI, how to play this game with as many example situations as possible. For each screenshot, I logged which action I took at that moment. Over time, this process generated a large dataset of labeled images — the essential "ground truth" the CNN needed to learn.

To expand my dataset and help the model generalize better, I applied data augmentation by flipping images horizontally and adjusting the labels accordingly.

The CNN itself consisted of multiple layers:

- **Convolutional layers** to extract important features from the images,
- **Pooling layers** to reduce the dimensionality,
- and finally **Dense layers** leading to an output predicting one of the five possible actions.

After experimenting with different architectures, I achieved an **accuracy of about 85%** on the validation data.

## Challenges and Solutions

One major challenge was to get the AI to play in real time. This required writing a custom program that would:

1. Continuously capture live screenshots from the game,
2. Feed them through the trained model,
3. Execute the predicted action instantly.

Another interesting observation was how the AI, despite being trained on my human gameplay, found its own ways to optimize runs — including discovering a glitch that I hadn’t noticed during my own playing!

## Lessons Learned

This project was a huge learning experience for me, especially in:

- Gathering and preparing training data,
- Designing and tuning neural networks for real-time applications,
- Implementing computer vision-based game agents without direct access to a game’s internal mechanics.

It also highlighted something fascinating: AI agents often find unconventional solutions — a reminder that they don't just mimic us, but can sometimes outperform or even surprise us.

If you're interested in a more detailed walkthrough, check out the [YouTube video](https://www.youtube.com/watch?v=ZVSmPikcIP4) I made about it!