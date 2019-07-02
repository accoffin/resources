# Bird Watching

## Introduction
Biologists often have to go bird watching to do studies on how many birds there are in an area.

## Requirements
Write a program to take in a list of animals that you spot, and `print` each one on a new line.

However if you see 'bird', you should shout BIRD! instead so your colleague can keep count of them.

Here is an example:

```text
Animals: rodent rodent bird insect
rodent
rodent
BIRD!
insect
```

and another example:

```text
Animals: insect insect insect bird rodent ungulate insect ungulate
insect
insect
insect
BIRD!
rodent
ungulate
insect
ungulate
```

On the next page we have some hints for solving this problem.

## Research task
This task will require some **research** to solve!

You'll notice the input (from the user) is given as a **string** (such as `insect insect insect bird rodent ungulate insect ungulate`), however we need is a **list of strings** to solve the problem.

To do this, we need a way to split the user's input into pieces. Here is an example (not directly related to our problem) to get you thinking:

```python
data = input('Enter some marsupials: ')
marsupials = ?
print(marsupials)
```

What code would you replace the `?` with so `marsupials` contains `['possum', 'wombat', 'kangaroo']` when the input is `possum wombat kangaroo`?

Coders often research coding syntax and technique while writing programs. Try using **Google** to solve this problem of creating a **list** from a **string**!

If you spend more than 15 minutes searching for solution, have a look at the **Research task solution** page next.

## Research task (solution)
So far our programs have always asked the user for a single piece of input, either a number or a string, which we've stored in a variable.

If we want to get multiple pieces of input from the user, we could store them in a list.

To do that, we need a way to split the user's input into pieces — we can do this using the `.split` method:

```python
data = input('Enter some marsupials: ')
marsupials = data.split()
print(marsupials)
```

This program asks the user for a list of marsupials (as a string) and stores these in a variable data. It then uses the `split` method to convert this to a list.

`split` takes an input string and splits it between any whitespace characters (which include spaces, tabs
and newline characters).

To find this on **Google**, I used the keywords of *Python convert string to list*. When searching for things on Google, it's a good idea to include the coding language you want (i.e. *Python*).

## Solution
Now onto solution for the problem!

Let's used what we learned from the research task to get a list of `animals` from the user:

```python
data = input('Enter some animals: ')
animals = data.split()
```

Now we have to loop through every `animal`. When the `animal` is equal to `'bird'` we print out *BIRD!*, otherwise we just print out the animal name:

```python
for animal in animals:
    if animal == 'bird':
        print('BIRD!')
    else:
        print(animal)
```

Here's the entire solution:

```python
data = input('Enter some animals: ')
animals = data.split()

for animal in animals:
    if animal == 'bird':
        print('BIRD!')
    else:
        print(animal)
```

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
