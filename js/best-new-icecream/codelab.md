# Best New Ice Cream Combination

## Background
Everyone knows that two scoops of **ice cream** are better than one! But the best part is coming up with a new winning combination of flavors.

## Requirements
Make sure you've completed the **Meet the Puppy** project before this one!

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Complete the code so we get the required output.

Here is an example:

```text
Flavor 1: Chocolate
Flavor 2: Hazelnut
New best ever flavor combination...
Chocolate and Hazelnut!
```

Here's another example:

```text
Flavor 1: Sour Cherry
Flavor 2: Cookies 'n' Cream
New best ever flavor combination...
Sour Cherry and Cookies 'n' Cream!
```

## Solution
To solve this problem, I first asked for the flavors using `prompt()`:

```javascript
const firstFlavor = prompt("Flavour 1:");
const secondFlavor = prompt("Flavour 2:");
```

Now that the flavors are stored in `firstFlavor` and `secondFlavor`, we combine the variables with the required strings:

```javascript
console.log('New best ever flavor combination...');
console.log(firstFlavor + ' and ' + secondFlavor + '!');
```

Here's the entire solution:

```javascript
const firstFlavor = prompt("Flavour 1:");
const secondFlavor = prompt("Flavour 2:");

console.log('New best ever flavor combination...');
console.log(firstFlavor + ' and ' + secondFlavor + '!');
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*