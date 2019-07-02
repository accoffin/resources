# Exercises

## Welcome
Welcome to your third **exercise pack**.

We've prepared more exercises to get you used to working with lists, loops and dictionaries!

## Things to do
In Python, create a list of three things you want to do before the end of the year.

## Things to do (solution)
There's a couple of things to remember for this exercise: 
- to make a list you use `[]`
- each list item is separated with `,`

Ok, here's my end of year bucket list in Python:

```python
['Write more code in Python', 'Go to the Zoo', 'Feed a goat']
```

## Favorite foods
In Python, create a list of your top favorite foods (as long as you want!).

Then print out the **first** and **last** items of the list using an **index**.

**Hint**: To use an index to access an element in a list, you put the index inside `[]`. For example:

```python
x = [1, 2, 3]
print(x[0])
```

## Favorite foods (solution)
I'll start off with a list stored in a variable:

```python
foods = ['chickpea soup', 'noodle salad', 'tiramisu', 'sushi', 'bruschetta']
```

Indexes start at `0`, so I'll access the first element of the list in `foods[0]` and the last in `foods[4]`:

```python
print(foods[0])
print(foods[4])
```

Now let's say that my list didn't have four items. What if it had three items:

```python
foods = ['salmon', 'blueberries', 'salad']
```

In this case, the first element is still in `foods[0]`, but the last element is in `foods[2]`.

Can you see a pattern here? The first element is always in `foods[0]`, and the last element is always in the **length of the list - 1**. For example, the length of the foods list above is `3`, but the last element is in `2`.

Using this fact, my completed solution uses `len` to find the last index:

```python
foods = ['chickpea soup', 'noodle salad', 'tiramisu', 'sushi', 'bruschetta']
print(foods[0])
last_index = len(foods) - 1
print(foods[last_index])
```

My code works for any list with more than one item!

## Chorus
In a song, there are often repeated lyrics in a section called the **chorus**.

You're given a **Python list** that contains each line of a hit song inside `chorus`:

```python
chorus = ['Wanna code?', 'Yep!', 'Yep!', 'Yep!', 'Getta code in', 'Py!', 'Py!', 'Python!']
```

Write a program that uses this `chorus` list and prints each lyric on a separate line.

This should be your output:

```text
Wanna code?
Yep!
Yep!
Yep!
Getta code in
Py!
Py!
Python!
```

## Chorus (solution)
I have used a `for` loop to loop through every single item once:

```python
chorus = ['Wanna code?', 'Yep!', 'Yep!', 'Yep!', 'Getta code in', 'Py!', 'Py!', 'Python!']

for lyric in chorus:
    print(lyric)
```

## Counting sheep
*Counting sheep* is a method used by some people to help them go to sleep.

Let's write a program that **counts up** from `1` to a number the user specifies to count sheep like this: *1 sheep*, *2 sheep*, *3 sheep*, ....

Here are some examples of the output required:

```text
Sheep to count? 1
1 sheep
```

```text
Sheep to count? 2
1 sheep
2 sheep
```

```text
Sheep to count? 10
1 sheep
2 sheep
3 sheep
4 sheep
5 sheep
6 sheep
7 sheep
8 sheep
9 sheep
10 sheep
```

**Hint**: Use `int()` to convert the string input to a number

## Counting sheep (solution)
Let's first get the number of sheep to count:

```python
sheep_count = input('Sheep to count? ')
sheep_count = int(sheep_count)
```

Counting sounds like a great job for a `for` loop and `range`! When using `range` I ask myself these two questions:
- What number do I start at? `1`
- What number do I end **before**? `sheep_count + 1`

Therefore, my `range` in the `for` loop will be `range(1, sheep_count + 1)`.

I've added the `for` loop here with the required printing done with a **formatted string**:

```python
for i in range(1, sheep_count + 1):
    print(f'{i} sheep')
```

Here is the solution all together:

```python
sheep_count = input('Sheep to count? ')
sheep_count = int(sheep_count)

for i in range(1, sheep_count + 1):
    print(f'{i} sheep')
```

## Chorus II
From a previous exercise, we used this `chorus` list:

```python
chorus = ['Wanna code?', 'Yep!', 'Yep!', 'Yep!', 'Getta code in', 'Py!', 'Py!', 'Python!']
```

We want to repeat the lyrics **three** times.

Can you do this using only **two** `for` loops?

## Chorus II (solution)
I could copy and paste the last solution's for loop **two** more times:

```python
chorus = ['Wanna code?', 'Yep!', 'Yep!', 'Yep!', 'Getta code in', 'Py!', 'Py!', 'Python!']

for lyric in chorus:
    print(lyric)

for lyric in chorus:
    print(lyric)

for lyric in chorus:
    print(lyric)
```

This approach isn't so good because the question says I only need **two** `for` loops but I used **three** `for` loops!

Do you remember `range` from the **for loops** lesson? Using `range` I can loop the number of times I specify:

```python
chorus = ['Wanna code?', 'Yep!', 'Yep!', 'Yep!', 'Getta code in', 'Py!', 'Py!', 'Python!']

for count in range(3):
    for lyric in chorus:
        print(lyric)
```

Now I'm only using **two** loops and my code is (arguably) easier to understand with less duplication.

## Interesting facts
In Python, create a list of three **interesting facts** about you. For example, the owl in our logo would make this list:

```python
facts = ['I can fly', 'I rotate my head 270 degrees', 'I eat fish']
```

Your program should then get user input for the **index** of the fact they want to know, and your program should print out the fact at that index.

Here's some sample output using the `facts` above:

```text
Enter an index: 0
I can fly
```

```text
Enter an index: 2
I eat fish
```

When the user tries a index less than `0` **or** greater than the *length of the `facts` list - 1*, the output should say *There is no fact there!*:

```text
Enter an index: 3
There is no fact there!
```

```text
Enter an index: -1
There is no fact there!
```

**Hint**: Use an `if` and `else` statement to check that the index is valid
**Hint**: Use `int()` to convert the string input to a number

## Interesting facts (solution)
I'll start of with some **owl facts** and an index from the user:

```python
facts = ['I can fly', 'I rotate my head 270 degrees', 'I eat fish']
index = input('Enter an index: ')
```

I need to convert the index to an `int` (**number**) as it's currently a **string**:

```python
index = int(index)
```

Now, I need to check that the index meets the output requirements. The question says anything less than `0` *or* greater than the *length of the `facts` list - 1* is **not** a valid index.

I can write a comparison for that requirement: `index < 0 or index > length(facts) - 1`. Alternative and equally correct comparisons you might've thought of are:
* `index <= -1 or index > length(facts) - 1`
* `index < 0 or index >= length(facts)`
* `index <= -1 or index >= length(facts)`

I put the comparison into an `if` statement to cover the case where the index can't be found:

```python
if index < 0 or index > len(facts) - 1:
    print('There is no fact there!')
```

Now, I still need to get the element from the list by its index when the index is valid. To do this, I can add an `else` statement, and access the element at the specific index with `[]`:

```python
if index < 0 or index > len(facts) - 1:
    print('There is no fact there!')
else:
    print(facts[index])
```

The solution is therefore:

```python
facts = ['I can fly', 'I rotate my head 270 degrees', 'I eat fish']
index = input('Enter an index: ')
index = int(index)

if index < 0 or index > len(facts) - 1:
    print('There is no fact there!')
else:
    print(facts[index])
```

### Alternative solution
You might've thought about this problem differently!

In the solution above, I find a comparison for a **invalid** index (according to the question) and use it for the `if` statement. What if we find a comparison for a **valid** index (according to the question) and use that for the `if` statement? 

The question implies that a valid index from the user would be **greater than or equal to** zero and **less than** the length of the list. Therefore, one comparison you might use is `index >= 0 and index < len(facts)`.

Here's what the solution would look like with this approach:

```python
facts = ['I can fly', 'I rotate my head 270 degrees', 'I eat fish']
index = input('Enter an index: ')
index = int(index)

if index >= 0 and index < len(facts):
    print(facts[index])
else:
    print('There is no fact there!')
```

Both solutions are equally valid!