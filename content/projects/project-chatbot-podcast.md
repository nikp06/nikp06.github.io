+++
title = "AI Agent with RAG-System for german History Podcast"
date = "2024-08-10"
author = "Niklas Petersen"
coversmall = "img/project-chatbot-podcast/chatbot.gif"
contenttype = "project"
description = "In collaboration with a well-known german history podcast, I developed an AI Agent that was capable of leveraging the knowledge from nearly 500 episodes. To this end, a machine learning pipeline was deployed to the cloud to automatically transcribe podcast episodes and organize the contents in a vector database. Using a RAG agent and a large language model (LLM) the system provided precise answers to detailed questions and could even pinpoint, who was speaking, when he was speaking and in which episode. Moreover, a dashboard featured useful statistics such as speaking time analysis and word clouds."
tags = ["IaC", "Python", "DevOps", "MLOps", "RAG", "Chatbot", "AI Agent", "GenAI", "LLM", "Speech2Text", "Vector Database", "Terraform", "AWS", "Cloud"]
keywords = ["Building an AI Agent with RAG for a Podcast", "Chatbot in AWS", "Python", "DevOps", "MLOps", "RAG-Agent", "Chatbot", "GenAI", "LLM", "Speech to Text", "Vector Database", "Terraform", "AWS", "Cloud"]
showFullContent = false
readingTime = true
hideComments = false
postinfo = true
+++
More coming soon ..
<!-- 
So I thought it would be nice to be able to built an expert chatbot for my favorite history podcast and be able to ask it something like "what did [name] say about [topic] from that one episode, where he talked about [whatever]?" and it would find the relevant passage(s) from the correct episode, answer my question precisely and even give me timestamps.
With this project, I achieved this goal and I'm really happy with the result.

We all know one of these podcasts, that is just so rich with knowledge, that it would be a waste, if it's not catalogued in some form or another. The history podcast that I worked with for this project has published almost 500 episodes at the time of writing this. Luckily advancements in natural language processing (NLP), in this case powerful speech-to-text algorithms, make it possible to capture the fleeting nature of spoken language and convert it into text. This text can then be represented mathematically for machines to be able to convert some sort of meaning into numbers by transforming words, or rather parts of words, into large vectors. Storing these inside a so called vector database makes them accessible for an automated AI agent with retrieval augmented generation (RAG).

But let's not get too far ahead. Let me dive deeper into how I approached this project, the technology I used and what came out of it in the end.

So first of all, of course I had to transform individual episodes into text. For this, I have built a fully-automated transcription pipeline in the AWS cloud. Whenever I build infrastructure in the cloud, I make sure to use Infrastructure as Code (IaC). Although there is a steep learning curve to this, I think it's preferrable to using the UI of your cloud platform. Using IaC makes your project reproducible and you just have to worry less about accidentally destroying infrastructure. The framework I used for this project is Terraform.

Let me explain what the pipeline is doing step-by-step:

Here's a simple schema of the pipeline.
[PIPELINE IMAGE] -->