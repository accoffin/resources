# Letters from camp! (Assignment)

## Background
Let's make funny (and possibly nonsensical) stories by asking someone for a series of words and then using those words to create a 'fill in the blank' story. There are often crazy results!

Some of your friends are going camping and everyone is expect them to send postcards back home ... only one problem: there’s more fun outside than being stuck inside writing!

## Requirements
Write a program that will help your friends tell fun stories about what they’re doing at camp. Your program should ask the user for some things you might find at camp and turn them into a story.

```text
 Name: Jane
Relation: Aunty
Noun: stick
Animal (plural): sloths
Sport: tennis
Adjective: bouncy
Another Adjective: crunchy
Verb: hop
Dear Aunty,
Camp stick has been bouncy so far!
Tomorrow we will play tennis if the weather is ok.
Today it has been raining cats and sloths all day!
If we cannot play tennis, maybe we will just hop.
I am sure it will be crunchy either way!
See you soon! Jane
```

Feel free to make this **as complex** or **as simple** as you like!

As this is an **assignment** there is no right or wrong answer.

### Pro tip

Start *small* and slowly expand your program.

After every change try running the code to make sure the program is working!

Save often and test often!

## Solution
This is **just one** possible answer to the assignment.

As long as you're telling a **fun story** using JS, you've completed this assignment!

In my solution, I decided to recreate the sample text (though you can have any variation).

To do so, we'll need a whole lot of `prompt()`:

```javascript
const name = prompt("Name:");
const relation = prompt("Relation:");
const noun = prompt("Noun:");
const animals = prompt("Animal (plural):");
const sport = prompt("Sport:");
const adjective = prompt("Adjective:");
const anotherAdjective = prompt("Another Adjective:");
const verb = prompt("Verb:");
```

Once we've got all the variables storing a relevant string, we can combine them using **concatenation**:
```javascript
console.log("Dear " + relation + ",");
console.log("Camp " + noun + " has been " + adjective + " so far!");
console.log("Tomorrow we will play " + sport + " if the weather is ok.");
console.log("Today it has been raining cats and " + animals + " all day!");
console.log("If we cannot play " + sport + ", maybe we will just " + verb + ".");
console.log("I am sure it will be " + anotherAdjective + " either way!");
console.log("See you soon! " + name);
```

Our story's done!

## Additional content licenses
Questions are based on content from ACA, used under the following license:

*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*