---
layout: post
title: Inspect
subtitle: Let's go on an adventure &mdash; see what you're going to do before you do it
---

Try this yourself! Keep a tab of this webpage open and go to your favorite website, or stay here. Here's an [example](https://www.serebii.net/pokedex-bw/049.shtml) of a website that's pretty 1 to 1 with what you see and its underlying HTML.

The menu will vary by web browser, but right click on the web-page. Click 'Inspect'. You'll see a giant pane pop up. Don't worry about any changes you make in this pane, you're not doing any harm! When you get a web-page from the internet, you're just getting a copy, not the original. If you refresh, your web browser will request a new copy and overwrite all your changes.

### HTML

An `<element>` is the building block of HTML, such as `<a href="url">Clickable Link</a>`.

Elements are placed within other elements to create a hierarchy, and ultimately, a web-page.

Under your 'Elements' tab, you can see all the HTML for the website you're looking at. You can hover your mouse over elements and see what space each element occupies, and right click on specific parts of the page to see exactly what their HTML looks like. You can modify HTML real time just by double-clicking! You can add, modify, and erase elements whatever elements you want. I like to erase elements of web-pages that are laggy or annoying.

Try it, there's an invisible element below this one. Remove the comments (`<!-- -->`) around it to make it visible.

<!-- <img src="hidden_doggo.jpg" class="img-fluid" style="max-width: 50%"> -->

### CSS

A `rule: value;` and what elements they are assigned to is the core of CSS, such as `a { color: red; }`. This would make links (the element for links is `<a>`, for whatever reason) red.

The style of any element can be overwritten, added to, removed, or even animated! The appearence of your web-page is *very* customizable, able to make any page look unique and full of personality. If you'd rather use a suite of pre-made CSS, or just work from one as a base, there's also suites of CSS others have made you can pull from, such as [Bootstrap](https://getbootstrap.com/). This tutorial won't cover that.

If you look down or around, you'll hopefully see a 'Styles' tab. This tab is where you see CSS the of each element as you select it. Like the HTML, you can modify it and see what happens in real time. If you're not getting the option to modify an existing rule, you can create a new rule and modify that one. Insert the rule `transform: rotate(180deg);` into `body: {...}` and have a good laugh!

The Inspect pane may also come with a button to simulate what a website might look like on mobile. It can be helpful for getting previews of how your site looks and acts on mobile.

### JS

Code is the core of JS, and is a bit beyond the scope of these tutorials, because it requires knowing how to program. Learning to program may take weeks instead of a 2 paragraph explanation on some stranger's website. JS boosts a web-page from something like a poster that never changes from the moment you load it, to something you can interact with and change real-time.

You might be wondering where the JS is and how to find it from the Inspect pane. It can be found in `<script>` elements, but is generally more unreachable or hidden from the web browser's side, as far as I know. You might also have luck finding full JS files from the site's file hierarchy, which can be accessed in the 'Sources' tab.

### Other

Explore others' websites to your heart's content before getting started on your own website! There many more things you can learn from Inspect about a website than its HTML, CSS, and JS, and the site's file hierarchy. For example:
- All the other websites this website is accessing (which is almost always more than one) and network timing
- A live console (if you don't know what that is don't worry)
- Memory usage (the ability to remember what was clicked on in a previous page doesn't come from magic)
- Performance
- Security (if a site isn't secure, someone else on your network may be able to see everything you type into it)
