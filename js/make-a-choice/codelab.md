# Make a Choice (Assignment)

## Introduction
Your next assignment is here!

You can choose to **build upon** your first assignment or **start fresh** with your newly upgraded coding skills.

## Requirements
In this assignment, you'll build upon your personalized story program and add different paths.

You should ask for input about **where** the user wants to go or **what** the user wants to do.

Again it's up to you to **make your own story**. You'll probably need to use **if**, **else**, **comparisons** and more to make a fun story!

Here's just one possible output:

```text
What's your name? Olivia
OLIVIA -- THE SUN IS BRIGHT OUTSIDE.
THERE'S SO MUCH TO DO!
SHOULD YOU GO TO THE BEACH OR THE FOREST?
Enter 'beach' or 'forest': beach
YOU APPLY SUNSCREEN AND RUSH TO THE BEACH.
IT'S REALLY NICE HERE.
THE END.
```

Here's what happens when Olivia takes the other path:

```text
What's your name? Olivia
OLIVIA -- THE SUN IS BRIGHT OUTSIDE.
THERE'S SO MUCH TO DO!
SHOULD YOU GO TO THE BEACH OR THE FOREST?
Enter 'beach' or 'forest': forest
THE FOREST IS LUSH AND LOVELY.
GREAT CHOICE.
THE END.
```

I put all the **story** in CAPITAL LETTERS to differentiate it from the **input from the user**. In your actual program, there's no need to do this!

Again, make your own story as **simple** or **complex** as you want! Hopefully more happens in your story!

## Solution
Assignments have open ended solutions so there's no right answer.

Here's the story that I wanted to make:

```text
Name? Alice
It is early in the morning and Alice is on her computer.
A bright message is flashing on her computer screen.
It says 'You have one new email'.
Will Alice open the email or delete it?
What will you do (enter 'open' or 'delete'): open
The email full of garbled text. Just junk!
Alice deleted the email.
The end.
```

This is what happens when you choose to delete the email:

```text
Name? Alice
It is early in the morning and Alice is on her computer.
A bright message is flashing on her computer screen.
It says 'You have one new email'.
Will Alice open the email or delete it?
What will you do (enter 'open' or 'delete')? delete
Ahh, an empty email inbox.
Alice thought to herself: is there anything better than this?
The end.
```

There's some parts which always happen in the story. Let's add these first:

```js
const name = prompt('Name? ');
console.log(`It is early in the morning and ${name} is on her computer.`);
console.log(`A bright message is flashing on her computer screen.`);
console.log("It says 'You have one new email'.");

const action = prompt("What will you do (enter 'open' or 'delete')? ");

console.log('The end.');
```

Now my code needs to behave differently based on if `'open'` or `'delete'` is entered.

When I want to test **different** conditions then take a different path based on each condition, we should use an `if` and `else if` statement together.

Here's what I used to take a different path in the story based on the different actions:
```js
if (action === 'open') {
    console.log('The email is full of garbled text. Just junk!');
    console.log(`${name} deleted the email.`);
} else if (action === 'delete') {
    console.log('Ahh, an empty email inbox.');
    console.log(`${name} thought to herself: is there anything better than this?`);
}
```

Here is all the code I used in my assignment:

```js
const name = prompt('Name? ');
console.log(`It is early in the morning and ${name} is on her computer.`);
console.log(`A bright message is flashing on her computer screen.`);
console.log("It says 'You have one new email'.");

const action = prompt("What will you do (enter 'open' or 'delete')? ");

if (action === 'open') {
    console.log('The email is full of garbled text. Just junk!');
    console.log(`${name} deleted the email.`);
} else if (action === 'delete') {
    console.log('Ahh, an empty email inbox.');
    console.log(`${name} thought to herself: is there anything better than this?`);
}

console.log('The end.')
```