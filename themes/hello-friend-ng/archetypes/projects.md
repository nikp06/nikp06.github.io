+++
title = "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
author = "Niklas Petersen"
cover = "img/{{ replace .Name "-" " " | title }}/cover.png"
contenttype = "project"
description = "Description here."
tags = ["Keyword1", "Keyword2"]
keywords = ["Keyword1", "Keyword2"]
showFullContent = false
readingTime = true
hideComments = false
toc = true
+++
