# Taboo! (Assignment)

## Background
Taboo is a word game where one person describes a word on a card so that their partner can guess it.

However, there are certain words that the person can't say when trying to describe the thing!

A player might have to describe 'cereal' without using the word 'breakfast'.

## Requirements
Write a program to help play Taboo. Here's an example for trying to guess the word 'cereal':

```text
Taboo word: breakfast
Description: A type of grain, like oats or bran.
Safe!
```

Here's another example, which includes the taboo word:

```text
Taboo word: breakfast
Description: The thing you eat for breakfast.
Taboo!
```

You should print *Taboo!* even if the word is in another word. Here's an example when trying to guess the word 'wheel':

```text
Taboo word: bike
Description: There's 4 on a car and 2 on a motorbike.
Taboo!
```

**Important**: View the instructions on the **next** page, there's more you need to know to complete this task!

### Optional extension
Sometimes games get exciting and players tend to shout.

If the word occurs in any case, lower, upper or mixed, it still counts. For example guessing the word 'oval':

```
Taboo word: sport
Description: WE HAVE SPORTS HERE!
Taboo!
```

### Advice
As we said on the last assignment: feel free to make this **as complex** or **as simple** as you like!

## Checking for substrings
Let's say we have a `sentence` string in JS:

```javascript
const sentence = 'Can you find me?';
```

We can easily check if a word is **inside** a string using `.includes()`:

```javascript
const hasFind = sentence.includes('find');
```

Now `hasFind` has a **Boolean** that's either `true` or `false`, depending on whether `sentence` has `'find'` or not!

### Extension: Researching
To complete the **extensions task** you'll need to research how to convert the text to lowercase or uppercase.

## Solution
This is **just one** possible answer to the assignment:
```javascript
const tabooWord = prompt('Taboo word:');
const description = prompt('Description:');

const isTabooWordInDescription = description.includes(tabooWord);

if (isTabooWordInDescription) {
    console.log('Taboo!');
} else {
    console.log('Safe!');
}
```

In my solution, I first read in the taboo word and description:

```javascript
const tabooWord = prompt('Taboo word:');
const description = prompt('Description:');
```

Eventually, I want an `if-else` statement to print out either *Safe!* or *Taboo!*, but **first** I need a **Boolean** that is `true` when the taboo word is in the description and `false` when the taboo word isn't in the description.

This sounds like the perfect job for `.includes()`:

```javascript
const isTabooWordInDescription = description.includes(tabooWord);
```

Awesome, so now `isTabooWordInDescription` is either `true` or `false` as its a **Boolean** value.

I can use this **Boolean** value in the `if-else` statement as I wanted:

```javascript
if (isTabooWordInDescription) {
    console.log('Taboo!');
} else {
    console.log('Safe!');
}
```

## Solution (extension)
Here's how I did the (optional) extension task.

We need to convert everything to the same case (either uppercase or lowercase). Why is this? Well, consider this example:

```
Taboo word: sport
Description: WE HAVE SPORTS HERE!
Taboo!
```

Clearly, `sport` is **not** in `WE HAVE SPORTS HERE!` as `WE HAVE SPORTS HERE!` is **all** capital letters (which are different from lowercase letters).

However, imagine if you transformed **everything** (the taboo word and description) both to lowercase:

```
Taboo word: sport
Description: we have sports here!
Taboo!
```

Now, clearly `sport` is in `we have sports here!`.

To make this happen, I first get the word and description as usual:
```javascript
const tabooWord = prompt('Taboo word:');
const description = prompt('Description:');
```

After some research, I found `.toLowerCase()` converts a **string** to **lowercase**":
```javascript
const lowerTabooWord = tabooWord.toLowerCase();
const lowerDescription = description.toLowerCase();
```

Now `lowerTabooWord` and `lowerDescription` are just lowercase versions of the strings from the user.

Therefore, my solution is to use `lowerTabooWord` and `lowerDescription` together:

```javascript
const tabooWord = prompt('Taboo word:');
const lowerTabooWord = tabooWord.toLowerCase();
const description = prompt('Description:');
const lowerDescription = description.toLowerCase();

const isTabooWordInDescription = lowerDescription.includes(lowerTabooWord);

if (isTabooWordInDescription) {
    console.log('Taboo!');
} else {
    console.log('Safe!');
}
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*