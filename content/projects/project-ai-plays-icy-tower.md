+++
title = "Training Neural Networks to play Icy Tower using Reinforcement Learning"
date = "2021-07-13"
author = "Niklas Petersen"
cover = "img/project-ai-plays-icy-tower/training.gif"
type = "project"
# link = "/posts/2023/03/building-a-step-function-with-error-handling-in-aws-with-terraform/"
description = "Ein Modell wurde trainiert, das Spiel Icy Tower zu spielen. Dafür wurde ein genetischer Algorithmus aus dem Bereich des selbstverstärkenden Lernens (Reinforcement Learning) verwendet, welcher iterativ über Neuro-Evolution neuronale Netze entwickelt. Zusätzlich wurde das Spiel in Python möglichst originalgetreu nachprogrammiert."
tags = ["Reinforcement Learning", "Deep Learning", "Genetic Algorithm", "Real-Time", "Streaming", "Visualization", "Python", "Neuro-Evolution"]
keywords = ["Icy Tower", "Reinforcement Learning", "Deep Learning", "Genetic Algorithm", "Real-Time", "Streaming", "Visualization", "Python", "Neuro-Evolution"]
showFullContent = false
readingTime = true
hideComments = false
+++

My fascination for Machine Learning and it's capabilities sparked with famous breakthrough-projects, where machines learned to play various (video-)games.
Watching [AlphaGo defeat Lee Sedol](https://www.youtube.com/watch?v=WXuK6gekU1Y) or [Deep Blue beat Garry Kasparov](https://www.youtube.com/watch?v=HwF229U2ba8) was when I first saw, how algorithms could master a complex game with endless possibilities like Go or Chess and even learn something like intuition. Projects like [DeepMind’s AlphaStar](https://www.youtube.com/watch?v=cUTMhmVh1qs&t=1371s) or [OpenAI Five](https://www.youtube.com/watch?v=eHipy_j29Xw) pushed the boundaries of AI even further by teaching machines to strategize, adapt, and even collaborate. These breakthroughs inspired me to make my own attempts of using ML to train neural networks to play games. YouTubers like [Code Bullet](https://www.youtube.com/@CodeBullet) helped perceiving such endeavours a little less unattainable as they seemed. So I thought: "Hey, why don't I just give it a shot?".

So this post will be a short breakdown of how I trained neural networks with neuro-evolution to play the game Icy Tower in real-time using reinforcement learning and a genetic algorithm called [NEAT](https://neat-python.readthedocs.io/en/latest/neat_overview.html).
Even though I was still a novice to machine learning back when I started this project in 2021 and the code is a mess, I am still very proud of my achievement.
What made me even more proud at the time, was that the creator of the legendary game Icy Tower [Johann Peitz](https://x.com/johanpeitz) acknowledged my project.
{{< twitter user="johanpeitz" id="1412823539875516421" >}}


{{< youtube W6qyRbmr_aA >}}

