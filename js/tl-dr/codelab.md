# TL;DR

## Background
TL;DR is short for *too long; didn't read*. A reader can use *tl;dr* to say a story is too long. An author can use *tl;dr* before a brief summary so readers can decide to read the full story or not.



## Requirements
Write a (rude!) program to complain when a line of input is too long.

Your program should read in a line of text. If the line is longer than 30 characters, your program should output *TL;DR*. For lines that are 30 characters or shorter, your program should output *I read it*.

Here is an example of how your program should work:

```javascript
Sentence: This is a short sentence.
I read it.
```

```javascript
Sentence: This is a very long sentence and it might not get read.
TL;DR
```

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip), then add in this code:

```javascript
const sentence = prompt('Sentence: ');

const getReadStatus = (sentence) => {
    return 'NO';
};

console.log(getReadStatus(sentence));
```

You'll notice that the code so far always returns `'NO!` instead of either `'I read it'` or `'TL;DR'`.

**Fix** the code so we get the required output.

## Solution
```javascript
const getReadStatus = (sentence) => {
    return 'NO';
};
```
This problem was mainly about fixing a broken function. From the broken function we can tell this function should `return` some sort of **string** (not a **Boolean** or **number**).

Recall we can use `sentence.length` to count the number of characters that `sentence` has.

Let's create the condition and use an `if` and `else` statement:

```javascript
const getReadStatus = (sentence) => {
    if (sentence.length <= 30) {
        return 'I read it';
    } else {
        return 'TL;DR';
    }
};
```

Notice we **need** to return a string, as the code later on simply prints out whatever it gets:

```javascript
console.log(getReadStatus(sentence));
```

Here's the complete solution:

```javascript
const sentence = prompt('Sentence: ');

const getReadStatus = (sentence) => {
    if (sentence.length <= 30) {
        return 'I read it';
    } else {
        return 'TL;DR';
    }
};

console.log(getReadStatus(sentence));
```

## Additional content licensess
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*