# Personalized stories (Assignment)

## Introduction
Your first assignment has arrived! Assignments are great for extending your skills in JS.

Write your JS code **first**, then if you're interested we've also completed the assignment with a possible solution!

## Requirements
In this assignment, you'll write a [personalized story](https://en.wikipedia.org/wiki/Personalized_book) program that your friend can use in JS.

A personalized story uses the user's inputs for things such as their name, age and favorite food. 

You'll have to **make your own story** and use **variables**, **input**, **string**, **numbers** and more to make a fun story.

Here's what the output will look like with a simple story that I made up:

```text
What's your name? Jerry
What's your age? 17
'Jerry, are you daydreaming?'
'Hello, is anyone there?' asked Mr. Burger.
It was happening again.
Jerry always fell asleep in math class.
'Wake up you are 17 now, you can't miss out on math class,' said Mr. Burger.
Jerry woke up and studiously finished all the math homework Mr. Burger had assigned.
The End.
```

Let's see how the program would look with different input from the user:

```text
What's your name? Jen
What's your age? 120
'Jen, are you daydreaming?'
'Hello, is anyone there?' asked Mr. Burger.
It was happening again.
Jen always fell asleep in math class.
'Wake up you are 120 now, you can't miss out on math class,' said Mr. Burger.
Jen woke up and studiously finished all the math homework Mr. Burger had assigned.
The End.
```

You can make your own story as **simple** or **complex** as you want (and hopefully more interesting than mine).


## Solution
Assignments have open ended solutions, so it's a great time to experiment with JS code and create something awesome.

I wanted to make a fairly simple story about a friend called `Alice` who's always running.

This is what I wanted my story to be:

```text
Name? Alice
Age? 23
Favorite activity? running
Alice was running again!
Indeed, Alice had been running for all 23 years of their life.
Alice was running in the morning and even running in the night!
Alice loved running.
```

Notice that personalized stories work for **any user**, so another user might use my program to generate this one:

```text
Name? Mia
Age? 1.2
Favorite activity? sleeping
Mia was sleeping again!
Indeed, Mia had been sleeping for all 1.2 years of their life.
Mia was sleeping in the morning and even sleeping in the night!
Mia loved sleeping.
```

I'll ask the user for their name, age and favorite thing to do:

```JS
const name = prompt('Name? ');
const age = prompt('Age? ');
const favoriteActivity = prompt('Favorite activity? ');
```

In the second part, I converted the script of my story into JS code!

Every line uses a **formatted string** to put the variable's values into the string:

```JS
console.log(`${name} was ${favoriteActivity} again!`);
console.log(`Indeed, ${name} had been ${favoriteActivity} for all ${age} years of their life.`);
console.log(`${name} was ${favoriteActivity} in the morning and even ${favoriteActivity} in the night!`);
console.log(`${name} loved ${favoriteActivity}.`);
```

Awesome! My story's completed.

Here's all my code from the assignment:

```JS
const name = prompt('Name? ');
const age = prompt('Age? ');
const favoriteActivity = prompt('Favorite activity? ');
console.log(`${name} was ${favoriteActivity} again!`);
console.log(`Indeed, ${name} had been ${favoriteActivity} for all ${age} years of their life.`);
console.log(`${name} was ${favoriteActivity} in the morning and even ${favoriteActivity} in the night!`);
console.log(`${name} loved ${favoriteActivity}.`);
```

I hope you enjoyed making your own story in JS!