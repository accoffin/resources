# Kangaroo Kiosk

## Background
You've been asked by the local museum to make a Kangaroo Kiosk, where people can find out information about kangaroos!


## Requirements
Your program should ask the user what particular information they would like, and then give that information to them.

The common name and Linnaean classification information about the kangaroo has been stored in the kangaroo list. This data is given to you.

If a user wants the 'common name', they should type that query *exactly*, and the common name is always stored in the first element of the list. So if our file contains:

```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];
```

... the output should be:

```text
Welcome to the Kangaroo Kiosk
What do you want to know? common name
Red kangaroo
```

If the user asks for the 'scientific name' instead, you should generate it from the last two elements of the list (the second last element is the genus and the last is the species):

```text
Welcome to the Kangaroo Kiosk
What do you want to know? scientific name
Macropus rufus
```

The information stored in the list may vary for different animals, but the common name will always be the first element, and the genus and species will always be the last two elements in the list.

If anything else is typed by the user, you should print *I do not understand*.

```text
Welcome to the Kangaroo Kiosk
What do you want to know? scientific
I do not understand.
```

## Extension task
Optional extension task:

We can find out the number of elements in the `kangaroo` array using `kangaroo.length`.

Let's assume the **data will change**, therefore `kangaroo[8]` might **not always** contain the last element.

Can you solve this problem using `kangaroo.length`?

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Add this code:

```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];

console.log('Welcome to the Kangaroo Kiosk');

const wantedInformation = prompt('What do you want to know?');
```

Complete the code so we get the required output.

## Solution
We were provided the code to get the required information from the user:

```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];

console.log('Welcome to the Kangaroo Kiosk');

const wantedInformation = prompt('What do you want to know?');
```

When `wantedInformation === 'common name'`, we want the **first** element. That's in `kangaroo[0]` (remember, indexes start at `0`).

When `wantedInformation === 'scientific name'`, we want the **second last** and **last** element. That's in `kangaroo[7]` and `kangaroo[8]`.

Let's combine everything using `if`, `else if` and `else`:

```javascript
if (wantedInformation === 'common name') {
    console.log(kangaroo[0]);
} else if (wantedInformation === 'scientific name') {
    console.log(kangaroo[7] + ' ' + kangaroo[8]);
} else {
    console.log('I do not understand.');
}
```

Here's the complete solution (without completing the extension task):

```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];

console.log('Welcome to the Kangaroo Kiosk');

const wantedInformation = prompt('What do you want to know?');

if (wantedInformation === 'common name') {
    console.log(kangaroo[0]);
} else if (wantedInformation === 'scientific name') {
    console.log(kangaroo[7] + ' ' + kangaroo[8]);
} else {
    console.log('I do not understand.');
}
```

## Solution (extension)
```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];
```

What is the `length` of kangaroo? Using `kangaroo.length` we find its `9`.

Now, where is the **last element**? The last element is in index `8`, so from `kangaroo.length` we subtract `1` to get the **last element**.

Where is the **second last element**? The second last element is in index `7`, so from `kangaroo.length` we subtract `2` to get the **second last element**.

The result of this insight is this code:

```javascript
if (wantedInformation === 'common name') {
    console.log(kangaroo[0]);
} else if (wantedInformation === 'scientific name') {
    const lastIndex = kangaroo.length - 1;
    const secondLastIndex = kangaroo.length - 2;

    console.log(kangaroo[secondLastIndex] + ' ' + kangaroo[lastIndex]);
} else {
    console.log('I do not understand.');
}
```

Here's the new complete solution:

```javascript
const kangaroo = ['Red kangaroo', 'Animalia', 'Chordata', 'Mammalia', 'Marsupialia', 'Diprotodontia', 'Macropodidae', 'Macropus', 'rufus'];

console.log('Welcome to the Kangaroo Kiosk');

const wantedInformation = prompt('What do you want to know?');

if (wantedInformation === 'common name') {
    console.log(kangaroo[0]);
} else if (wantedInformation === 'scientific name') {
    const lastIndex = kangaroo.length - 1;
    const secondLastIndex = kangaroo.length - 2;

    console.log(kangaroo[secondLastIndex] + ' ' + kangaroo[lastIndex]);
} else {
    console.log('I do not understand.');
}
```


## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
