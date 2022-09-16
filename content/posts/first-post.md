+++
title = "Writing your first Post on GitHub Pages with Jekyll"
date = "2022-06-11"
author = "Niklas Petersen"
authorTwitter = "killerplauze1" #do not include @
cover = "img/kepler.jpg"
description = "I talk about how to create a blogpost with jekyll."
tags = ["ML", "Data Engineering"]
keywords = ["jekyll", "blog", "github pages"]
showFullContent = false
readingTime = true
hideComments = false
+++

{{< gist spf13 7896402 >}}

The goal of this article is to teach myself about blog writing with _Jekyll_ and _GitHub Pages_.

## Create Markdown File



{{< tweet user="SanDiegoZoo" id="1453110110599868418" >}}

Create this Markdown File (e.g. 2022-06-11-first-post.markdown) and add the text your writing about with adequate markdown.

## Customize Front Matter metadata



{{< youtube ZVSmPikcIP4 >}}

The Front Matter metadata goes at the very top of your newly created markdown file. Here you specify layout, title, date and blog categories like so:

```yaml
---
layout: post
title: "Writing your first Post on GitHub Pages with Jekyll"
date: 2022-06-11
categories: jekyll blogging
---
```

[The Blog posts of simondosda](https://simondosda.github.io/posts/2021-09-15-blog-github-pages-3-content.html) among others are what helped me get started with this personal website. The following are copied from his example post.

## Structure your posts

Use level 2 (`##`) and if necessary level 3 (`###`) titles
to structure your posts.

## Display code snippets

You can display a block of code like the following using triple backticks.
You can also specify the language after the first triple backticks.

```python
def hello(name):
    return f'hello {name}'
```

## Add images

Create an `assets` folder where you can put all your images,
then display them with a link starting with an exclamative mark like this:

{{< image src="/img/hello.jpg" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}

`![my inspiring image]({{ "/assets/surface-hpw43cBT1lk-unsplash.jpg" | relative_url }})`.

![my inspiring image](img/hello.jpg)