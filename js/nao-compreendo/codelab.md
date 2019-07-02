# Não Compreendo

## Background
You're in Brazil for a holiday! You're going to need a few Portuguese words to help you get around.

## Requirements
Write a program to translate some useful words from Portuguese. Here are the words you need (from Portuguese to English):

Ola -> Hello
Sim -> Yes
Nao -> No

Your program should ask for the Portuguese word then print out the English translation. For example:
```text
What did they say? Ola
Hello
```

Here is another example:
```text
What did they say? Sim
Yes
```

If the Portuguese word isn't one of the three above, your program should print *Nao compreendo.* which means "I don't understand." in Portuguese. For example:

```text
What did they say? Desculpe
Nao compreendo.
```

**Hint**: Use an `if`, `else if` and `else` in your code!

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Start off with this code:

```javascript
const phrase = prompt('What did they say?');
```

Complete the code so we get the required output.

## Solution
We were provided the code to get the `phrase` that was spoken in Portuguese.

```javascript
const phrase = prompt('What did they say?');
```

Recall that `if` and `else if` let us test for multiple cases. For each Portuguese word, I've checked it against the phrase for equality (`===`):

```javascript
if (phrase === 'Ola') {
    console.log('Hello');
} else if (phrase === 'Sim') {
    console.log('Yes');
} else if (phrase === 'Nao') {
    console.log('No');
}
```

When there's a match I've printed the English translation.

Now, what about in the case where we don't know what they are saying? We can use an `else` for when **no** previous tested condition matches:

```javascript
if (phrase === 'Ola') {
    console.log('Hello');
} else if (phrase === 'Sim') {
    console.log('Yes');
} else if (phrase === 'Nao') {
    console.log('No');
} else {
    console.log('Nao compreendo.');
}
```

Here's the complete solution:

```javascript
const phrase = prompt('What did they say?');

if (phrase === 'Ola') {
    console.log('Hello');
} else if (phrase === 'Sim') {
    console.log('Yes');
} else if (phrase === 'Nao') {
    console.log('No');
} else {
    console.log('Nao compreendo.');
}
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*