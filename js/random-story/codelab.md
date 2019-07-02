# Random story (Assignment)

## Introduction
You're a big shot writer in the *Generic and Repetitive Stories* department and your boss has asked you to write `25` short stories by lunch.

"Don't worry, it'll be a breeze," you say with unexpected glee. "I know how to code!".

"Sure," says your boss apprehensively. "I made you a list of **nouns**, **verbs**, **names**, **relations**, and **adjectives** to help out!".

```javascript
const nouns = ['horseradish', 'trout', 'sedan', 'biscuit', 'bucket', 'briefcase', 'tote', 'application', 'chair', 'flora', 'cabinet', 'camera', 'microphone', 'relish'];
const verbs = ['relieved', 'spliced', 'made', 'glared', 'glanced', 'checked', 'crushed', 'squashed', 'erased', 'drew', 'cheered', 'fought', 'splashed', 'contemplated'];
const relations = ['Aunty', 'Uncle', 'Brother', 'Sister', 'Mom'];
const animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
const names = ['Baldwin', 'Hawkins', 'Winslow', 'Tyson', 'Strudwick', 'Sinclair', 'Ridley', 'Olson'];
const adjectives = ['jolly', 'wary', 'furious', 'immense', 'sleek', 'brilliant', 'fancy', 'compact', 'tranquil'];
```

You're also given this function to use:

```javascript
const randomSelection = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

## Requirements
In your **final** assignment, you will generate **random** short stories!

You'll *randomly* select words from the lists of **nouns**, **verbs**, **names**, **relations**, and **adjectives** from your boss (or you can make your own better lists), to make a story!

You will have to *randomly* select the word as you'll need to generate 25 stories. This means every time you run your program you need to generate a **new story**!

Here's an example of one story you might write (with placeholders left in for the random words):

```text
{random relation}, yesterday my long lost {random relation}, who is internationally known because they had {random verb} a {random noun}, found me!
I couldn't really tell because this was the first time we've met, but they seemed way too {random adjective} and {random adjective}!
They said they saw my video where I {random verb} a {random noun} for my pet {random animal}. I said that video was really {random adjective}.
To be continued.
```

Here's one random story your program might generate:

```text
Mom, yesterday my long lost Aunty, who is internationally known because they had spliced a tote, found me!
I couldn't really tell because this was the first time we've met, but they seemed way too furious and tranquil!
They said they saw my video where I splashed a sedan for my pet cow. I said that video was really jolly.
To be continued.
```

As usual, make your story as complex or as simple as you want!

**Hint**: Use the `randomSelection` function to randomly select a word from a list. For example:
```javascript
let animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
console.log(randomSelection(animals));
```

**Hint**: Remember that when using a formatted string with `${}`, any code can be put inside `${}`. For example:

```javascript
let animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
console.log(`A random animal is a ${randomSelection(animals)}`);
```

## Extension: All stories at once
Right now you have to generate one story at a time.

Can you change your program so it makes all 25 stories at once.

## Solution
I started off with the lists from my hypothetical boss **and** since I want random values I'll need the `randomSelection` function.

```javascript
const nouns = ['horseradish', 'trout', 'sedan', 'biscuit', 'bucket', 'briefcase', 'tote', 'application', 'chair', 'flora', 'cabinet', 'camera', 'microphone', 'relish'];
const verbs = ['relieved', 'spliced', 'made', 'glared', 'glanced', 'checked', 'crushed', 'squashed', 'erased', 'drew', 'cheered', 'fought', 'splashed', 'contemplated'];
const relations = ['Aunty', 'Uncle', 'Brother', 'Sister', 'Mom'];
const animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
const names = ['Baldwin', 'Hawkins', 'Winslow', 'Tyson', 'Strudwick', 'Sinclair', 'Ridley', 'Olson'];
const adjectives = ['jolly', 'wary', 'furious', 'immense', 'sleek', 'brilliant', 'fancy', 'compact', 'tranquil'];

const randomSelection = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

Since I'm not feeling very creative, I'll use the template story!

```javascript
console.log(`${randomSelection(relations)}, yesterday my long lost ${randomSelection(relations)}, who is internationally known because they had ${randomSelection(verbs)} a ${randomSelection(nouns)}, found me!`);

console.log(`I couldn't really tell because this was the first time we've met, but they seemed way too ${randomSelection(adjectives)} and ${randomSelection(adjectives)}!`);

console.log(`They said they saw my video where I ${randomSelection(verbs)} a ${randomSelection(nouns)} for my pet ${randomSelection(animals)}. I said that video was really ${randomSelection(adjectives)}.`);

console.log("To be continued.");
```

### Extension: All stories at once
Now I want to complete the extension! The boss wants 25 stories at once!

I'll use a `for` loop as it can be used to repeat code a set number of times:

```javascript
for (var i = 1; i < 26; i++) {
    console.log(`------- STORY ${i} -------`);

    console.log(`${randomSelection(relations)}, yesterday my long lost ${randomSelection(relations)}, who is internationally known because they had ${randomSelection(verbs)} a ${randomSelection(nouns)}, found me!`);

    console.log(`I couldn't really tell because this was the first time we've met, but they seemed way too ${randomSelection(adjectives)} and ${randomSelection(adjectives)}!`);

    console.log(`They said they saw my video where I ${randomSelection(verbs)} a ${randomSelection(nouns)} for my pet ${randomSelection(animals)}.I said that video was really ${randomSelection(adjectives)}.`);

    console.log("To be continued.");

    console.log("------------------------------");
}
```

Here's my code for the entire assignment (including the extension):

```javascript
const nouns = ['horseradish', 'trout', 'sedan', 'biscuit', 'bucket', 'briefcase', 'tote', 'application', 'chair', 'flora', 'cabinet', 'camera', 'microphone', 'relish'];
const verbs = ['relieved', 'spliced', 'made', 'glared', 'glanced', 'checked', 'crushed', 'squashed', 'erased', 'drew', 'cheered', 'fought', 'splashed', 'contemplated'];
const relations = ['Aunty', 'Uncle', 'Brother', 'Sister', 'Mom'];
const animals = ['dog', 'cat', 'cow', 'rabbit', 'rodent'];
const names = ['Baldwin', 'Hawkins', 'Winslow', 'Tyson', 'Strudwick', 'Sinclair', 'Ridley', 'Olson'];
const adjectives = ['jolly', 'wary', 'furious', 'immense', 'sleek', 'brilliant', 'fancy', 'compact', 'tranquil'];

const randomSelection = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (var i = 1; i < 26; i++) {
    console.log(`-------- STORY ${i} --------`);

    console.log(`${randomSelection(relations)}, yesterday my long lost ${randomSelection(relations)}, who is internationally known because they had ${randomSelection(verbs)} a ${randomSelection(nouns)}, found me!`);

    console.log(`I couldn't really tell because this was the first time we've met, but they seemed way too ${randomSelection(adjectives)} and ${randomSelection(adjectives)}!`);

    console.log(`They said they saw my video where I ${randomSelection(verbs)} a ${randomSelection(nouns)} for my pet ${randomSelection(animals)}. I said that video was really ${randomSelection(adjectives)}.`);

    console.log("To be continued.");

    console.log("------------------------------");
}
```

## The End
What's this?! You thought you were finished? Well you are! But, why not have a go at making your story more complex and fun!

Could you add different types of word lists to make your story more fun? Try searching the web for things like *sport verbs* if you're interested in making a story about sports!

Can you add different paths using an `if` statement? The story could take an unexpected twist with the wrong choice!

Perhaps you could add functions to make different parts of your story? By making functions you can reuse parts of your story in many places to create even more awesome stories.

## Additional content licenses
Word lists are from https://github.com/imsky/wordlists and are used under the following license:

```text
The MIT License (MIT)

Copyright (c) 2017 Ivan Malopinsky

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*