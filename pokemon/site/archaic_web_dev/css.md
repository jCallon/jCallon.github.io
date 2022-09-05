---
layout: post
title: CSS
subtitle: The appearence of a web-page
---

Alright, I hope you have some ugly blobs of content you're unsatisfied with, in other words, an HTML file with more than a `<p>` tag in the `<body>` tag!

Here's where we start to make it look nicer.

Make a file called style.css in index.html's folder. styles.css doesn't have some sort of old convention like index.html, to my knowledge, but it's a common name you might see. Add `<link href="styles.css" rel="stylesheet">` to the `<head>` tag of index.html. Your CSS isn't found and used by your HTML automatically, you use this tag to explicitly link them. 

HTML usually loads sequencially. So, putting `<link>` near the top makes your CSS file one of the first things to load. See this [stackexchange](https://stackoverflow.com/questions/28635141/sequence-in-which-html-page-loads) for a more in-depth explanantion. What I'm trying to get at is, it can be good to put laggy elements near the bottom of your HTML and position them later. Once you start inserting `<script>` tags, it's better put them after the `<body>` tag so they don't lag your page while they load, among other reasons. Of course, it's always good to consider just breaking up large pages into subpages.

### Applying some common CSS

Let's add some of the most common CSS I can think of to your styles.css. Full lists of possible rules and values are available on [W3schools](https://www.w3schools.com/css/default.asp).

{% capture html %}
<embed type="text/html" src="example_3.txt">
{% endcapture %}
{% capture css %}
<embed type="text/html" src="example_3.css">
{% endcapture %}
{% capture iframe %}
<embed type="text/html" src="example_3.html">
{% endcapture %}

{% assign t = "HTML,CSS,Result" | split: ',' %}
{% assign c = "" | split: ',' | push: html | push: css | push: iframe %}
{% include tab.html name='foo' tab=t content=c %}

That looks ***way*** better, don't you think?

{: .table .table-striped}
| Rule               | Common value | Common usage |
| ------------------ | ------------ | ------------ |
| `margin`           | auto | horizontally center an element |
| `padding`          | 15px | better visual seperation between elements |
| `font-family`      | Verdana, sans-serif | change element(s) to a custom or web-safe font |
| `font-size`        | 12pt | make text larger or smaller |
| `color`            | red | change the color a link |
| `background-color` | slategray | color the background of an element |
| `width`            | 70% | set width of an element |
| `min-width`        | 400px | set the minimum width of an element |
| `max-width`        | 900px | set the maximum width of an element |
| `border`           | 1px solid slategray | put a thin border arount an element |
| `border-radius`    | 5px | round the corners of an element |

There's **so** many more options to explore, but these are some of the most basic. You can even [make animations](https://www.w3schools.com/cssref/css3_pr_animation.asp) that will automatically run on GPU instead of CPU!

### IDs and classes

IDs and classes are a way to refer to elements from CSS and JS with much better control.

- If you want to change the appearance of and refer to one element specifically, you can put `id="someName"` into an element, giving it a unique identifier.
  - HTML: `<element id="someName"> ... </element>`
  - CSS: `#someName{ ... }`
- If you want to change the appearance of and refer to many elements, you can add put `class="someName"` into each element you want affected. Unlike IDs, more than one elements can share a class, and an element can have more than one class via a space-seperated list, such as `class="class1 class2 class3"`.
  - HTML: `<element class="someName"> ... </element>`
  - CSS: `.someName{ ... }`
- If your ID or class names start with any characters but ascii a-z, then for the remainder use any character but ascii a-z, 0-9, -, and \_, I can’t promise they’ll hook up to CSS and JS correctly.

### Don't go over-kill!

Hopefully you have a web page now that could pass in 1990, or even today! Or, it's a test of courage for the eyes, just as you indended? Anyways, please don't worry about going over-kill with custom CSS, there's many modern templates you can pull from!

I pull from modern templates on this webiste right here, actually. But that's not to say bare CSS isn't worth learning, no, not at all. My knowledge of how CSS lets me modify generic templates into **exactly what I want, when I want** and fix visual bugs I run into for my specific use cases.

If I have a vision in mind, **I can make it**, leveraging templates instead of relying on them.
