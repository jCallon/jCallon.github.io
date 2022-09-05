---
layout: post
title: HTML
subtitle: The content of a webpage
---

### Write HTML

So... you’re ready to move on from looking at other's work to making your own? Let's get to work!

First, you need a text editor. Use any you like, and if you don't even know what a text editor is, just use [Notepad++](https://notepad-plus-plus.org/). All the text editor will do is make what you write more colorful and easier to read.

Now, make a folder to work in. You will end up with many files by the end, which you want stored in a consolidated space instead of strewn about your computer. Make a file called index.html within that folder. By convention, index.html is where the home page lives.

Open index.html. We're going to put a first few essential elements in, or tags, as they're also called. First, the `<html>` tag. Add another line that closes the tag, `</html>`. The / marks the end of a tag. Unfortunately, tags aren't very consistent with whether they need to be closed or not, so you'll need to consider that when inserting each element. Within the `<html>` tag, put a `<head>` and `<body>` tag. Close them too. You should see these 2 tags in any website. Put a `<title>` tag within the `<head>` tag, and a `<p>` tag within `<body>` tag. The contents of the `<title>` tag are the name of the website in your tab bar, and the contents of the `<p>` tag will become a paragraph in the body, or general display area, of your page.

All of the previous paragraph may have been confusing if you've never written HTML before. This is the desired result.

{% capture html %}
<embed type="text/html" src="example_1.txt">
{% endcapture %}
{% capture iframe %}
<embed type="text/html" src="example_1.html">
{% endcapture %}

{% assign t1 = "HTML,Result" | split: ',' %}
{% assign c1 = "" | split: ',' | push: html | push: iframe %}
{% include tab.html name='foo' tab=t1 content=c1 %}

### Load HTML

Now that you've written your very first HTML, you're probably wondering how to load it. Doing so is *ridiculously easy*! Just drag the HTML file into a web-browser, and click reload to reload it any time, for example, when you save an update to your html file. As you can see in the address bar, the file being loaded is on your computer, not the internet. So, get as wild you want for now.

So, you're probably very disappointed in how bad your web-page looks, but very happy it exists! That's a very expected until we start adding CSS and more content. Here's some common elements you can use to spice up your content, and feel free to steal any ideas from your favorite websites. I like to use [W3schools](https://www.w3schools.com/) to tell me the details of each element type.

{% capture html %}
<embed type="text/html" src="example_2.txt">
{% endcapture %}
{% capture iframe %}
<embed type="text/html" src="example_2.html">
{% endcapture %}

{% assign t2 = "HTML,Result" | split: ',' %}
{% assign c2 = "" | split: ',' | push: html | push: iframe %}
{% include tab.html name='bar' tab=t2 content=c2 %}

{: .table .table-striped}
| Element      | Full Name      | Purpose |
| ------------ | -------------- | ------- |
| `<image>`    | image          | Images, such as jpg, png, gif, or svg. |
| `<div>`      | divider        | Dividing large content into smaller chunks, or boxes. |
| `<table>`    | table          | Creating a table to show information, or to use as a layout tool. |
| `<th>`       | table head     | Giving table columns names. |
| `<tr>`       | table row      | Defining a row in a table. |
| `<td>`       | table data     | Defining data within a row of a table. |
| `<a>`        | link           | Giving users clickable links to external resources. |
| `<ol>`       | ordered list   | Creating 1, 2, 3... lists of information. |
| `<ul>`       | unordered list | Creating bullet-point lists of information. |
| `<li>`       | list item      | Creating lines within lists. |
| `<iframe>`   | inline frame   | Rendering other websites within a boxed frame of your own, such as Youtube videos. |
| `<nav>`      | navigation     | Laying out page hierarchy and links to other pages within you domain for visitor ease. |
| `<form>`     | form           | Collecting information from visitors. To make them actually store information or do something take more work I won't cover here. |
| `<input>`    | input          | Collect a type of input within a form, such as a number or text. |
| `<textarea>` | text area      | Collect a sizable amount of text from a visitor within a form. |
| `<select>`   | select         | Creating dropdown menus for visitors within forms. |
| `<option>`   | option         | Creating selectable options within dropdown menus. |
| `<button>`   | button         | Creating buttons to submit form information. |
| `<br>`       | break          | Making elements appear on different lines without using CSS. |
| `<h1>`       | header 1       | Give a grand title, nnnouncing the purpose of a page, or welcome a visitor. |
| `<h2>`       | header 2       | Giving a subtitle for a page, or a title for a page section. |
| `<h3>`       | header 3       | Giving a title for a page section. |
