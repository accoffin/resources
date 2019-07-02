# You Call That a Pony?

## Background
You want a pony! Horses and ponies are a little bit different. There is a height restriction.

The International Federation for Equestrian Sports defines a pony as no bigger than 149 cm (from horse shoes to [withers](https://en.wikipedia.org/wiki/Withers)). If an animal's height is greater than 149 cm, the animal is a horse, not a pony.

Note: The actual definition of a pony is not quite so straight forward!

## Requirements
Write a program to read in the animal's height. If the height is above 149 cm it should do this:

```text
What height is the animal? 155
That animal is a horse.
```

If the height of the animal is 149 cm or lower, it should do this:

```text
What height is the animal? 140
It's a pony!
```

**Tip**: Don't forget to convert the user's input from a **string** to a **number** with `Number()` **before** doing the comparison.

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Complete the code so we get the required output.

## Solution
To solve this problem, I asked for the height, and got back a **string** from `prompt()`.

Now I need to convert this **string** to a **number**, to do so I used `Number()`.

```javascript
const heightString = prompt('What height is the animal?');
const height = Number(heightString);
```

Next, I needed a condition that tests if the "animal is 149 cm or lower". That condition is `height <= 149` in code.

```javascript
if (height <= 149) {
    console.log("It's a pony!");
}
```

That `if` statement wasn't enough! Since there needs to be **two** different paths for the code to take, we'll need an `if-else` statement:

```javascript
if (height <= 149) {
    console.log("It's a pony!");
} else {
    console.log('That animal is a horse.');
}
```

An alternate solution would be to think about what this condition is in code: "height is above 149 cm". In code that's `height > 150`. Therefore, an equally correct solution is to use this as your answer:

```javascript
if (height > 150) {
    console.log('That animal is a horse.');
} else {
    console.log("It's a pony!");
}
```

Finally, notice that `"It's a pony!"` uses **double quotes**. That's because there is a single quote **within** the string.

Here's the complete solution:
```javascript
const heightString = prompt('What height is the animal?');
const height = Number(heightString);

if (height <= 149) {
    console.log("It's a pony!");
} else {
    console.log('That animal is a horse.');
}
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*