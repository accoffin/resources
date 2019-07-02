# Under the Sea

## Introduction
Some oceanographers have taken some data of different types of fish that they spotted while doing surveys in the Pacific Ocean. One of their data sets is stored in the file *fish.txt*.

## Requirements
Create a file called *fish.txt* on your computer, and paste in these spotted fishes:

```
ocellaris clownfish
blue tang
puffer fish
manta ray
ocellaris clownfish
snapper
dugong
```

Write a program that is given a type of fish (from the user) and prints out matches from *fish.txt*.

Here's an example, with the file *fish.txt* which has two instances of *ocellaris clownfish* in the file:

```text
What fish are we looking up? ocellaris clownfish
Found a ocellaris clownfish!
Found a ocellaris clownfish!
```

Here is an example where blue tang appears only once in the first data file.

```text
What fish are we looking up? blue tang
Found a blue tang!
```

If there is no match, your program should not produce any output.

```text
What fish are we looking up? sting ray
```

## Solution
Let's get the input for the fish we're finding:

```python
fish = input('What fish are we looking up? ')
```

After getting the input, let's read in the file:

```python
with open('fish.txt') as f:
    for line in f:
        print(line)
```

When you print out each line, you'll notice there's an extra new line. We can remove this using the `strip` method:

```python
with open('fish.txt') as f:
    for line in f:
        stripped_line = line.strip()
        print(stripped_line)
```

If you print out each stripped line, you'll see the line is ripe for use in an **if statement**!

The if statement needs to have a comparison that checks if the stripped line is equal to the fish from the input. Here's the if statement I used inside the for loop:

```python
if stripped_line == fish:
            print(f"Found a {fish}!")
```

The solution for this project is:

```python
fish = input('What fish are we looking up? ')

with open('fish.txt') as f:
    for line in f:
        stripped_line = line.strip()
        if stripped_line == fish:
            print(f"Found a {fish}!")
```


## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
