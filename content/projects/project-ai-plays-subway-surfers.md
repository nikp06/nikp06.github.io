+++
title = "Training a Neural Network to play Subway Surfers using Computer Vision"
date = "2021-09-15"
author = "Niklas Petersen"
cover = "img/project-ai-plays-subway-surfers/cnn.gif"
type = "project"
# link = "/posts/2023/03/building-a-step-function-with-error-handling-in-aws-with-terraform/"
description = "Mit Computer-Vision und Methoden des überwachten Lernens wurde ein Convolutional Neural Network trainiert, das Spiel Subway Surfers auf nahezu menschlichem Niveau zu spielen. Durch eigenes Spielen wurde ein ausreichend großer Datensatz erstellt, aus dem das Modell lernen konnte die entsprechenden Tasten-Aktionen situationsabhängig in Echtzeit auszuführen."
tags = ["Computer Vision", "CNN", "Deep Learning", "Data Augmentation", "Real-Time", "Streaming", "Visualization", "Python"]
keywords = ["Subway Surfers", "Computer Vision", "CNN", "Deep Learning", "Data Augmentation", "Real-Time", "Streaming", "Visualization", "Python"]
showFullContent = false
readingTime = true
hideComments = false
+++

My fascination for Machine Learning and it's capabilities sparked with famous breakthrough-projects, where machines learned to play various (video-)games.
Watching [AlphaGo defeat Lee Sedol](https://www.youtube.com/watch?v=WXuK6gekU1Y) or [Deep Blue beat Garry Kasparov](https://www.youtube.com/watch?v=HwF229U2ba8) was when I first saw, how algorithms could master a complex game with endless possibilities like Go or Chess and even learn something like intuition. Projects like [DeepMind’s AlphaStar](https://www.youtube.com/watch?v=cUTMhmVh1qs&t=1371s) or [OpenAI Five](https://www.youtube.com/watch?v=eHipy_j29Xw) pushed the boundaries of AI even further by teaching machines to strategize, adapt, and even collaborate. These breakthroughs inspired me to make my own attempts of using ML to train neural networks to play games. YouTubers like [Code Bullet](https://www.youtube.com/@CodeBullet) helped perceiving such endeavours a little less unattainable as they seemed. So I thought: "Hey, why don't I just give it a shot?".

Even though I was still a rookie in terms of machine learning back when I started this project in 2021 and the code isn't great, I am still very proud of my achievement.
So here is a breakdown of how I trained a neural network to play the game Subway Surfers in real-time using a convolutional neural network (CNN) and computer vision.

{{< youtube ZVSmPikcIP4 >}}
