# Get in the Game!

## Background
You're at a friend's board game party and it's time to play a new game. Your favorite game is Codenames, so you're hoping to play that, but you're happy to play anything.

## Requirements
Write a program to see what the next game is. If it's Codenames, the program should print I love Codenames! For example:

```text
What should we play next? Codenames
Awesome! I love Codenames.
I will set up the board!
```

Whatever the next game is, you're happy to play. Your program should print out that you will set up the board even if the next game isn't Codenames.

```text
What should we play next? Settlers of Catan
I will set up the board!
```

Here is another example, with a different game:

```text
What should we play next? Codenames
Awesome! I love Codenames.
I will set up the board!
```

## Your turn
Download and **unzip** the template.

Complete the code so we get the required output.

## Solution
We start off with the all important question: what to play!

```javascript
const gameName = prompt('What should we play next?');
```

Now it's time to add a branch to the code.

There's a condition that `gameName` is **equal to** the string of `'Codenames'` so I've translated this to code using `gameName === 'Codenames'`.

Now what did we want to do when this condition is `true`? We wanted to print out `'Awesome! I love Codenames.'`.

```javascript
if (gameName === 'Codenames') {
    console.log('Awesome! I love Codenames.');
}

console.log('I will set up the board!');
```

Notice that to get the second message to **always** print out, we place it **outside** the `if` statement.

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*