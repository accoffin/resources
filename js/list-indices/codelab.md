# List Indices

## Requirements
You are given a file that contains a list called `animals`.

Write a program to print out a user's selection from the list.

Your program should take an input number from the user, and print off which element in the list that is —
so for an input of `1` your program should print off the first element in the list, and so on.

For example, if the file is:

```javascript
const animals = ['dog', 'cat', 'mouse', 'rat'];
```

... then the program output would look like:

```text
Which animal? 1
That animal is: dog
```

Here's another example:

```javascript
const animals = ['kangaroo', 'emu', 'koala'];
```

```text
Which animal? 3
That animal is: koala
```

**Tip**: Remember that lists start at **index 0**, so you will need to convert the input number to the
corresponding index of this list.

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Add this code:

```javascript
const num = Number(prompt('Which animal?'));

const animals = ['dog', 'cat', 'mouse', 'rat'];
```

Complete the code so we get the required output.

## Solution
We were provided with this code:

```javascript
const num = Number(prompt('Which animal?'));

const animals = ['dog', 'cat', 'mouse', 'rat'];
```

Notice that `num` is off by one compared to the item's index in `animals`. For example, when `num` is `1`, we want to get the **index** of `0`. Similarly, when `num` is `3`, we want the **index** of `2`.

Let's keep a variable for this index:

```javascript
const index = num - 1;
```

Finally, let's print out the required value from the list using `[]`:

```javascript
console.log('That animal is: ' + animals[index]);
```

Here's the complete solution:

```javascript
const num = Number(prompt('Which animal?'));

const animals = ['dog', 'cat', 'mouse', 'rat'];
const index = num - 1;

console.log('That animal is: ' + animals[index]);
```

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*