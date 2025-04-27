+++
title = "Using Machine Learning to predict Tactics from spatiotemporal Data in Football"
date = "2022-01-10"
author = "Niklas Petersen"
cover = "img/project-ml-soccer-analytics/all_pr.png"
contenttype = "project"
# link = "/posts/2023/03/building-a-step-function-with-error-handling-in-aws-with-terraform/"
description = "The goal of my master's thesis was to investigate, to what extent machine learning models were capable of automating tactical analysis in football to benefit coaches and decision makers. Spatiotemporal data (players' and ball's xyz-positions) from 15 professional first-division Bundesliga matches were obtained and manually annotated regarding the respective tactical maneuvers that were employed by the teams. Using this feature-engineered dataset and supervised learning techniques, machine learning models were trained to accurately predict these tactical elements."
tags = ["Deep Learning", "Data Augmentation", "Feature-Engineering", "Statistics", "Visualization", "Python", "Computer Vision"]
keywords = ["Football", "Soccer", "Deep Learning", "Data Augmentation", "Feature-Engineering", "Statistics", "Visualization", "Python", "Computer Vision"]
showFullContent = false
readingTime = true
hideComments = false
postinfo = true
+++

During my studies in **Human Technologies in Sports and Medicine** at the **German Sports University Cologne**, I focused my master's thesis (2021–2022) on applying machine learning to automate tactical analysis in soccer. Building on this work, I co-authored a publication in the journal *Data Mining and Knowledge Discovery*. You can find the publication here: [https://link.springer.com/article/10.1007/s10618-025-01092-9](https://link.springer.com/article/10.1007/s10618-025-01092-9).

The aim of my thesis was to investigate how well machine learning models could predict tactical maneuvers based on spatiotemporal data from players and the ball, collected from 15 first-division Bundesliga matches. A key part of the work involved developing a feature-engineered dataset from manual expert annotations of match phases and validating the consistency of these annotations. Several supervised learning techniques, including logistic regression, random forests, and neural networks, were employed to predict these tactical elements.

The findings indicated that **feature engineering significantly improved model performance** compared to using raw positional data alone. Models trained on engineered features achieved **an F1-score increase of about 0.38 ± 0.15**. Furthermore, a **sequential neural network** was able to outperform a baseline logistic regression model by an average of **2.77 ± 2.26 percentage points**, showing that **more sophisticated models were able to offer small but meaningful improvements**.

Overall, the results supported the use of machine learning — and especially neural networks — as a promising approach for automating tactical analysis in soccer. However, the findings also highlighted that domain knowledge (captured through thoughtful feature engineering) remained crucial for achieving strong performance. The study suggested that while machine learning can indeed aid decision-makers and analysts, careful preparation of the data and expert involvement in modeling remain essential.
