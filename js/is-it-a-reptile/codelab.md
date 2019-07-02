# Is It a Reptile? 

## Background
It is hard to remember if a species belongs to a particular family — for example, is a komodo dragon a reptile, or not?

On your next exam, you know you will be quizzed on reptiles.

## Requirements
Write a program to check if a species you type in is one of the list of reptiles you'll need to remember.

We've given you a list of reptiles in the provided file (but your program should work on any reptiles list):

```javascript
const reptiles = ['frilled-neck lizard', 'crocodile', 'chameleon', 'gecko', 'iguana', 'komodo dragon'];
```

```text
Enter an animal: frilled-neck Lizard
Yes, it is a reptile. You should remember it!
```

If the animal is not in the list, then you tell yourself to ignore it by saying *That will not be in the test*.

```text
Enter an animal: raptor
That will not be in the test.
```

The name of the reptile must match the name in the list exactly — here is an example, where *komodo dragon* is in the list:

```text
Enter an animal: dragon
That will not be in the test.
```

**You must use a `for-of` loop to solve this problem.**

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Use this code to get you started:

```javascript
const reptiles = ['frilled-neck lizard', 'crocodile', 'chameleon', 'gecko', 'iguana', 'komodo dragon'];
const animal = prompt('Enter an animal:');
let isFound = false;

for (const reptile of reptiles) {

}
```

Complete the code so we get the required output.

This task is a bit tricky but stick with it!

If you need it, here are some hints for when you're stuck (they progressively give more information):

**Hint**: Notice that `isFound` is `false`.
**Hint**: Can you make `isFound` be `true`?
**Hint**: While looping through every `reptile` compare it to the `animal` from the user.
**Hint**: Use an `if` statement *inside* the `for-of` loop.
**Hint**: Use another `if-else` statement *outside* the loop to print `'Yes, it is a reptile. You should remember it!'` or `'That will not be in the test.'`.

## Solution
We were provided with this code:

```javascript
const reptiles = ['frilled-neck lizard', 'crocodile', 'chameleon', 'gecko', 'iguana', 'komodo dragon'];
const animal = prompt('Enter an animal:');
let isFound = false;
```

The first thing to notice is that `isFound` is currently `false`.

We'd like `isFound` to be `true` when the `animal` from the user is in `reptiles` and `false` when the `animal` is **not** in `reptiles`.

We could achieve this by looping through every `reptile` in `reptiles`. When `reptile` is **equal to** the `animal` from the user, we make `isFound = true`.

Here is my `for` loop to achieve this:
```javascript
for (const reptile of reptiles) {
    if (reptile === animal) {
        isFound = true;
    }
}
```

Ok, now `isFound` only has `true` when the animal from the user is in the list! To solve the problem, we need to use an `if-else` statement to print out the right message:
```javascript
if (isFound) {
    console.log('Yes, it is a reptile. You should remember it!');
} else {
    console.log('That will not be in the test.');
}
```

**Fun fact**: Computer scientists call this method of searching for an item in a list a *linear search*.

Here's the complete solution:

```javascript
const reptiles = ['frilled-neck lizard', 'crocodile', 'chameleon', 'gecko', 'iguana', 'komodo dragon'];
const animal = prompt('Enter an animal:');
let isFound = false;

for (const reptile of reptiles) {
    if (reptile === animal) {
        isFound = true;
    }
}

if (isFound) {
    console.log('Yes, it is a reptile. You should remember it!');
} else {
    console.log('That will not be in the test.');
}
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
