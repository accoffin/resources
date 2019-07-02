# Exercises

## Welcome
Welcome to your second **exercise pack**.

We've prepared more exercises to get you used to working with Booleans, string methods, comparisons and if-else statements!

## Are you asking me a question?
Given some input from the user, we want to know they're asking us a question.

We know the input is a question when it ends in a question mark: **?**.

Write a program that prints out `True` when the input is a question, and `False` otherwise.

Here is what your program should output:

```text
String: What is the weather like today?
Is ' What is the weather like today?' a question?
True
```

```text
String: Are those ants eating our honey?
Is 'Are those ants eating our honey?' a question?
True
```

```text
String: Every Saturday, Jasmine takes the bus to the beach.
Is 'Every Saturday, Jasmine takes the bus to the beach.' a question?
False
```

```text
String: This is certainly not a question.
Is 'This is certainly not a question.' a question?
False
```

## Are you asking me a question? (solution)
I used the same method from the last set of exercises to get the user input and print out the **formatted string**:

```python
string = input('String: ')
print(f"Is '{string}' a question?")
```

Here's what we recently learned: we can check if a string ends with a certain string by using the `endswith` method.

I used this method to check whether the string from the user **ends with** a `'?'`:

```python
print(string.endswith('?'))
```

We saw that `string.endswith('?')` will give back a Boolean value. That means `string.endswith('?')` will either be `True` or `False`. That's why I can simply print it!

Here's all the code used in the solution:

```python
string = input('String: ')
print(f"Is '{string}' a question?")
print(string.endswith('?'))
```

## Dollars in my pocket
I have some US dollars in my pocket. How much you ask? Well that's provided as user input!

**If** the dollars in my pocket is greater than `5`, I'll buy some ice-cream (the ice-cream only costs $2, but we're fiscally responsible).

Write a program that has this output, when the dollars is greater than `5`:

```text
Dollars in pocket: 20
Walking down the street, I see an ice-cream van.
I'm buying some!
I love ice-cream.
```

```text
Dollars in pocket: 100
Walking down the street, I see an ice-cream van.
I'm buying some!
I love ice-cream.
```

When the dollars is less than or equal to `5`, your program should have this output:

```text
Dollars in pocket: 2
Walking down the street, I see an ice-cream van.
I love ice-cream.
```

```text
Dollars in pocket: 0
Walking down the street, I see an ice-cream van.
I love ice-cream.
```

Notice how the *I'm buying some!* message isn't printed.

**Hint**: The *dollars in pocket* you get from `input` will be a **string**. You need it to be an **integer**, so use `int`. For example:

```python
dollars_in_pocket = input('Dollars in pocket: ')
dollars_in_pocket = int(dollars_in_pocket)
```

## Dollars in my pocket (solution)
I've started with the code from the hint, so I get the *dollars in pocket* information as an integer instead of a string.

```python
dollars_in_pocket = input('Dollars in pocket: ')
dollars_in_pocket = int(dollars_in_pocket)
```

Now the question shows we should **always** print *Walking down the street, I see an ice-cream van.*. I'll do that now:

```python
print('Walking down the street, I see an ice-cream van.')
```

The program will need to behave differently based on the dollars available. When (and only when) the dollars is **greater than** `5` we'll print a message of *I'm buying some!*.

This sounds like a job for an **if** statement which allows us to run code based on a condition.

The condition required here is `dollars_in_pocket > 5`. Let's add that to an if statement:

```python
if dollars_in_pocket > 5:
    print("I'm buying some!")
```

Finally, we **always** need to print *I love ice-cream.*, because that's what I'm thinking about whenever I see ice-cream:

```python
print('I love ice-cream.')
```

Here's the entire solution:

```python
dollars_in_pocket = input('Dollars in pocket: ')
dollars_in_pocket = int(dollars_in_pocket)
print('Walking down the street, I see an ice-cream van.')
if dollars_in_pocket > 5:
    print("I'm buying some!")
print('I love ice-cream.')
```

## Where?
Given some input from the user, we want to reply *I don't know where that is* when the input has *where* anywhere in the input.

Here is what your program should output:

```text
String: Do you know where the library is?
I don't know where
```

```text
String: I can't find that, where is it?
I don't know where
```

```text
String: Coding is fun, whereas that is not
I don't know where
```

When the text doesn't include *where* (lowercase) exactly, stay silent:

```text
String: Where
```

```text
String: WHERE IS IT?
```

```text
String: Can you please respond?
```

```text
String: You're not being helpful!
```

**Hint**: Use `in` to check if one string is in another string
**Hint**: Using `in` evaluates to a **Boolean** in Python. For example: `'a' in 'apple'` is `True`.
**Hint**: Can you use an `if` statement to solve this problem?

## Where? (solution)
The hints tell us that `in` gives back **Boolean**. Whenever something evaluates to a **Boolean** in Python, we can use it as a condition in an `if` statement!

Here's my code using `'where' in string` as the condition:

```python
string = input('String: ')

if 'where' in string:
    print("I don't know where")
```

## Purple
Imagine your favorite color is **Purple**.

Let's ask the user for their favorite color.

When their favorite color is the same as ours (**Purple**), we'll print *I love Purple too*.

Otherwise, we'll print *That's not the best color*.

Here's some examples of what your program should look like:

```python
What's your favorite color? Purple
I love Purple too
```

```python
What's your favorite color? Orange
That's not the best color
```

```python
What's your favorite color? Green
That's not the best color
```

When the user doesn't enter **Purple** exactly, we print *That's not the best color*:

```python
What's your favorite color? purple
That's not the best color
```

```python
What's your favorite color? Purp
That's not the best color
```

**Hint**: You'll need to use `if` and `else` in your code

## Purple (solution)
I've started off with this code:

```python
my_favorite_color = 'Purple'
their_favorite_color = input('What's your favorite color? ')
```

I want the program to behave differently based on the user input and a **condition**.

In specific, when `my_favorite_color == their_favorite_color` is `True` I want to print *I love Purple too*:

```python
if my_favorite_color == their_favorite_color:
    print('I love Purple too')
```

Now, I have one of the cases done!

The question goes on and says to **otherwise** print *That's not the best color*. This means that when the condition that `my_favorite_color == their_favorite_color` is `False`, I should print something else.

That's the perfect job for `else`:

```python
if my_favorite_color == their_favorite_color:
    print('I love Purple too')
else:
    print("That's not the best color")
```

Now, here's all the code used:
```python
my_favorite_color = 'Purple'

if my_favorite_color == their_favorite_color:
    print('I love Purple too')
else:
    print("That's not the best color")
```

## That's not my name
You have user input of a **name** and how **someone spelled your name**.

When the **name** is equal to how someone spelled your name, your program should print *That's my name*.

Otherwise, when the name isn't equal to how someone spelled your name, your program should print *That's not my name*.

Here's some examples of what your program should look like:

```python
Name: Jessie
How they spelled your name: Jessie
That's my name
```

```python
Name: Sydney
How they spelled your name: Sydnie
That's not my name
```

```python
Name: Marcus
How they spelled your name: Markus
That's not my name
```

```python
Name: Hans
How they spelled your name: Hans
That's my name
```

## That's not my name (solution)
I've first attained the strings from the user:

```python
name = input('Name: ')
spelling = input('How they spelled your name: ')
```

Now there's two different paths my code should have.

The first path is when `name == spelling` is `True` and I print *That's my name*.

The second path is when `name == spelling` is `False`, in which case I'll print *That's not my name*.

When there's two separate paths, an `if-else` statement can be used:

```python
if name == spelling:
    print("That's my name")
else:
    print("That's not my name*")
```

Here's what I ended up with:

```python
name = input('Name: ')
spelling = input('How they spelled your name: ')

if name == spelling:
    print("That's my name")
else:
    print("That's not my name*")
```

## Baby Boomers
The **baby boomer** generation includes anyone born between 1946 and 1964 (inclusive of these years).

Given input from the user, if they are born between 1946 and 1964 print out *You're a boomer.* otherwise print out *You're not a boomer*.

Here's some examples of what your program should look like:

```python
Year: 1946
You're a boomer.
```

```python
Year: 1963
You're a boomer.
```

```python
Year: 1999
You're not a boomer
```

**Hint**: Remember to convert the **string** to an `int`! Use `int()`.

## Baby Boomers (solution)
I know that an `if` and `else` statement can be used as the code has different behavior based on a condition on the year.

But what should the condition be?

When we say someone should be born **between** 1946 and 1964 what we're really saying is the person should be born after or on 1946 **and** born before or on 1964. Now it's clear I should use `and`!

With this key insight, here's the code I wrote:

```python
year = input('Year: ')
year = int(year)

if year >= 1946 and year <= 1964:
    print("You're a boomer.")
else:
    print("You're not a boomer")
```