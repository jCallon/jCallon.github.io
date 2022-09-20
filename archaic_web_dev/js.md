---
layout: post
title: JS
subtitle: The behavior of a web-page
---

If you want your website to do anything more than sit there after it loads, you're probably going to need to touch JS. Unfortunately, it has a bad reputation that's... not unfounded. Make a JS file, script.js, and add `<script src="script.js"></script>` to the bottom of `<body>`.
- Using 'embedded' JS refers to typing all your JS code into the ... of a `<script>...</script>` in your HTML file. This is useful for writing JS that will only be used by one web-page.
- Using 'external' JS refers to having an empty script tag in your HTML with a src pointing to where to find JS in a different file, for example `<script src="script.js"></script>`. As your JS and HTML get larger, and you have more pages using your JS, it's really nice to have JS in its own files instead, which is why I recommended it.

If you're new to programming, this page might be hard to read, but I'm doing my best. [W3schools](https://www.w3schools.com/js/) is here to help with lessons at your pace. I'm sorry, programming is a hard topic to introduce people to, not that it's hard once you get a foundation.

There's many [examples on W3schools](https://www.w3schools.com/js/js_examples.asp) to acquaint yourself and surely many Youtube videos as well. I've tried making video tutorials, and it takes a disproprtionate amount of time and makes my computer keel over.

### Debugging

'Debugging' is programmer lingo for finding the problems in your code and fixing them. It's actually pretty funny. Computers used to be massive boxes full of mostly empty space, with series of plastic-coated wires and vaccume tubes. Bugs and critters would actually crawl inside, get zapped, and need to be removed. The world has changed so much! It's like how pencils are made with graphite now instead of lead, but it just stuck, and we still call it lead although it's wrong, at least here in the states.

Anyways, your web browser being your compiler, the thing that's turning what you've written so far into an actual website, it reports compile and run-time errors, which can be found in the Console tab of the Inspect pane.
- Compilation errors are errors parsing your code into something meaningful to the computer, for example, spelling something wrong. Compilers don't auto-correct, because as you probably have experienced, autocorrect can be wrong. It offers suggestions for long-term fixes instead.
- Run-time errors are errors that happen after compilation, the most common example is 'accessing an array out-of-bounds'. In lay-man terms, it's like saying you have 25 attendees coming to your party, then trying to get the name of the 26th. They don't exist. If you paid for 5 apples and ask where your 6th is, the clerk will get mad. You only 'allocated enough resources' to buy 5.

To display things in the console, use `console.log(thing I want printed);`. For those of you familiar with programming, there is a `print(...);` function, but what it does is try to convert your page into a PDF to print from a printer, not print in your console.

### Making your website remember things

If you want your website to have a login and account system, that requires a server to check and validate against. Server maintenance requires money, so I don't know much about it and am not covering it.

Any information you're ok with being stored in the visitor's browser, you should, and it's really easy. Just keep in mind, by the very nature of you storing something on a visitor's computer, a visitor can modify it to *whatever* they want. And you should also be kind with the amount of space you use. Something great to store within a visitor's browser is their preferred colorscheme. Something terrible to store in a visitor's browser is their whether they're an admin. They can set admin to true in a few clicks from the Inspect pane.

Now then, onto the actual 'doing things' part. You do this by writing and saving to local storage. Local storage is per device, it has no way of knowing if the phone visitor is actually the desktop visitor from earlier. So, the visitor's phone data won't automatically sync with their desktop data.
- Write: `localStorage.setItem('item name', 'item value');`
- Read: `localStorage.getItem('item name');`

All names and values in local storage are strings, but you can easily convert them to other data types when needed using [type conversions](https://www.w3schools.com/js/js_type_conversion.asp), or as they're called in other programming languages, type casting. If you aren't familiar with the topic of a data type or would like to review some of JS's, please see [here](https://www.w3schools.com/js/js_datatypes.asp).

If you want to store more complex things than basic data types in local storage, like custom classes or data types, perhaps consider [JSON](https://www.w3schools.com/js/js_json_intro.asp).
- Write: `localStorage.setItem('my object name', JSON.stringify(my_custom_object));`
- Read: `let my_custom_object = JSON.parse(localStorage.getItem('my object name'));`
