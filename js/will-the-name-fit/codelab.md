# Will the Name Fit?

## Background
You have a new badge printer and it only allows you to print 20 characters including spaces on each badge.
That's not actually long enough for many names.

## Requirements
Write a program to test whether a name or nickname is too long to be printed onto a badge.

If the line is longer than 16 characters, your program should output *Shorten that name*. For lines that are 16 characters or shorter, your program should output *That will fit nicely*.

Here is an example of how your program should work:

```javascript
Name: Sherlock Holmes
That will fit nicely.
```

```javascript
Name: Emperor Palpatine
Shorten that name.
```

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

You can start yourself off with this code:

```javascript
const name = prompt('Name: ');

const isLongEnough = (name) => {

}

if (isLongEnough(name)) {
    console.log('That will fit nicely.');
} else {
    console.log('Shorten that name.');
}
```

Complete the code so we get the required output.

**Hint**: You just need to complete the code for the `isShortEnough` function which should return a **Boolean** (`true` or `false`)

**Hint**: Use `.length` to find the length of a string like this:

```javascript
const name = prompt('Name: ');

console.log(name.length);
```

## Solution
Since `name.length` counts up the number of characters in a string, we can use an `if` statement to check if `name.length <= 20`, then return `true` if it is, and `false` otherwise:

```javascript
const isShortEnough = (name) => {
    if (name.length <= 20) {
        return true;
    } else {
        return false;
    }
}
```

Once we've got this code, realize that `name.length <= 20` is a comparison. We saw earlier in the **comparisons** topic that a comparison returns a **Boolean**!

Therefore, `name.length <= 20` is either `true` or `false`.

A much shorter solution uses this fact:

```javascript
const isShortEnough = (name) => {
    return name.length <= 20;
}
```

Here's one complete solution:

```javascript
const name = prompt('Name: ');

const isShortEnough = (name) => {
    return name.length <= 20;
}

if (isShortEnough(name)) {
    console.log('That will fit nicely.');
} else {
    console.log('Shorten that name.');
}
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*