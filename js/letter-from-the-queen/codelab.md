# Letter from the Queen

## Background
For nearly 100 years, there has been a tradition that citizens of the United Kingdom and Commonwealth countries receive a letter from the King or Queen on their 100th birthday.

Write a program that works out how long until your letter arrives should you live to 100 in the UK.

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Complete the code so we get the required output.

Your program should ask the user how old they are then calculate 100 minus their age. For example:

```text
How old are you? 14
You must wait 86 years.
```

Here's another example:

```text
How old are you? 52
You must wait 48 years.
```

If you're already over 100, the answer is a negative number:
```text
How old are you? 152
You must wait -52 years.
```

### Important: Remember to converting the string to an integer
When you use `prompt()`, you get back a **string**, such as `'42'` or `'18'`.

```javascript
const ageString = prompt('How old are you?');
```

We want a **number**, such as `42` or `18`. Remember, we use `Number()` to convert a string to a number. So, to get a number from the value inside `ageString` we can use `Number(ageString)`.

## Solution
I started off by asking for the user's age with `prompt()`:
```javascript
const ageString = prompt('How old are you?');
```

Recall that `prompt()` gives back a **string**. Since we'll be doing some math on the age, we'll need to convert it to a **number**.

I'll convert it to a number using `Number()`, then store it in a new variable:

```javascript
const ageNumber = Number(ageString);
```

Finally, it's time to actually perform the math operation of subtraction:
```javascript
const yearsLeft = 100 - ageNumber;
```

Once you've figured out the numbers of years left, it's just a matter of printing out the result using **concatenation**:
```javascript
console.log('You must wait ' + yearsLeft + ' years');
```

Here's the entire solution:
```javascript
const ageString = prompt('How old are you?');
const ageNumber = Number(ageString);

const yearsLeft = 100 - ageNumber;

console.log('You must wait ' + yearsLeft + ' years');
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*