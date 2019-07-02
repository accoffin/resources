# Exercises

## Welcome
Welcome to your fourth **exercise pack**.

This pack has exercises in **functions** and **modules**. Have fun coding them up!

## Inches to centimeters
Your friends in the US measure everything in **inches**, while your friends in the UK measure everything in **centimeters**!

To convert from **inches** to **centimeters**, multiply inches by `2.54`.

Write a program that completes this function to `return` the conversion of inches to centimeters:

```python 
def inches_to_centimetres(inches):
```

Then test your program using these examples:

```text
print(inches_to_centimetres(5))
```

Should print `12.7`.

```text
print(inches_to_centimetres(15))
```

Should print `38.1`.

```text
print(inches_to_centimetres(21))
```

Should print `53.34`.

## Inches to centimeters (solution)
I need to complete the function body using the formula of `inches * 2.54`:

```python
def inches_to_centimetres(inches):
    return inches * 2.54
```

Remember to `return` the converted result!

## Fahrenheit to Celsius
Your friends in the US talk about the weather in **Fahrenheit**, while your friends in the UK are confused because they're used to **Celsius**!

To convert from **Fahrenheit** to **Celsius**, use this formula: `(F - 32) * 5/9`

Write a function that converts **Fahrenheit** to **Celsius**.

Then test your program using these examples:

```text
print(fahrenheit_to_celsius(86))
```

Should print `30.0`.

```text
print(fahrenheit_to_celsius(75.2))
```

Should print `24.0`.

```text
print(fahrenheit_to_celsius(100.4))
```

Should print `38.0`.

## Fahrenheit to Celsius (solution)
I'll start with the function definition.

The function needs a parameter for the temperature in Fahrenheit, so I'll name my parameter `fahrenheit`. I can choose any name, but `fahrenheit_to_celsius` is a clear name! Here's the definition I used:

```python
def fahrenheit_to_celsius(fahrenheit):
```

Next, I need to actually do the conversion using the formula `(F - 32) * 5/9`. The conversion to code is fairly straightforward:

```python
def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9
```

Here's all the code (including the tests):

```python
def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

print(fahrenheit_to_celsius(86))
print(fahrenheit_to_celsius(75.2))
print(fahrenheit_to_celsius(100.4))
```

## Sum list
You're running an online shop and all sales for the day are stored in a **list**. For example:

```python
sales = [10.2, 23.2, 1, 1.99, 4.32, 4.99]
```

Write a **function** called `total` with a parameter of `sales` that sums up the values in the `sales` list and returns the result.

Test your code using these function calls:

```text
print(total([1, 2, 3, 4]))
```

Should print `$10`.

```text
print(total([7, 2, 9, 100]))
```

Should print `$118`.

```text
print(total([1.25, 1.26, 4.99, 2.88, 1.16, 2.22]))
```

Should print `$13.76`.

Notice the `$` sign in front of the total sales.

**Hint**: Use a `for` loop to add up each item in the list

## Sum list (solution)
I'll start with the function definition, which the question says should have a single **parameter** of `sales`:

```python
def total(sales):
```

Inside the function I need to calculate the total sales. One way of doing this is to loop through every sale, and keep a variable (`total_sales`) with the total:

```python
total_sales = 0

for sale in sales:
    total_sales = total_sales + sale
```

Now `total_sales` contains the total sales! Finally, in the function, I need to add that `$` sign and `return` the result:

```python
return f"${total_sales}"
```

Here's the solution function with the testing code:

```python
def total(sales):
    total_sales = 0

    for sale in sales:
        total_sales = total_sales + sale
    
    return f"${total_sales}"

print(total([1, 2, 3, 4]))
print(total([7, 2, 9, 100]))
print(total([1.25, 1.26, 4.99, 2.88, 1.16, 2.22]))
```

### Alternative solution
Although it's not the solution I intended, another possible (and correct) solution would be to use the `sum` which Python includes to add all the numbers of the list.

For example, `sum([1, 2, 3])` equals to `6`.

Here's what such a solution would look like:

```python
def total(sales):
    total_sales = sum(sales)
    return f"${total_sales}"

print(total([1, 2, 3, 4]))
print(total([7, 2, 9, 100]))
print(total([1.25, 1.26, 4.99, 2.88, 1.16, 2.22]))
```

Usually, coders would just use `sum`, however it's still worthwhile to understand how to sum up a list without `sum` so you understand what `sum` does behind the scenes!

## Joke telling
Create a **function** called `tell_joke` with **parameters** of `emotion` and `action`.

It should return a string that tells a self-deprecating joke in this format: **When I'm *emotion*, I *action* then others are *emotion* with me**.

Test your code using these function calls:

```
print(tell_joke('sad', 'sing'))
```

Should print *When I'm sad, I sing then others are sad with me*.

```
print(tell_joke('bored', 'make a joke'))
```

Should print *When I'm bored, I make a joke then others are bored with me*.

## Joke telling (solution)
I'll start with the function definition, which the question says should have **parameters** of `emotion` and `action`:

```python
def tell_joke(emotion, action):
```

Now, the function should `return` a formatted string. This is what I used to put an `emotion` and `joke` into a **formatted string**:

```python
def tell_joke(emotion, action):
    return f"When I'm {emotion}, I {action} then others are {emotion} with me"
```

Here's all the code from the solution (including the testing code):

```python
def tell_joke(emotion, action):
    return f"When I'm {emotion}, I {action} then others are {emotion} with me"

print(tell_joke('sad', 'sing'))
print(tell_joke('bored', 'make a joke'))
```

## Random module
`random` is a **module** included in Python that has a function called `randint` that generates a random number between two numbers.

`randint` takes in **two** number parameters called `a` and `b` to generate numbers between `a` and `b`.

Generate a random number between 1 and 10 using this module.

**Hint**: Like any module, you will have to import `random`
**Hint**: Once it's imported, you'll have to use the `random.randint` function

## Random module (solution)
Whenever I want to use a module, I first `import` it:

```python
import random
```

I can now use specific functions from `random`, such as `randint`.

The question says that `randint` has **two** parameters (inputs) and **returns** a random number between the two inputs. This means I need to provide arguments of `1` **and** `10` to `randint` like so:

```python
print(random.randint(1, 10))
```

The entire solution is:

```python
import random
print(random.randint(1, 10))
```

## Dishes!
Your family / housemates uses **Python** to store their names in a list, for example:

```
names = ['Oli', 'May', 'Jay', 'Mia', 'Ali', 'Syd']
```

Write a program that selects a **random** name from the names list.

For example (the output is **random**, so the same name might be selected multiple times in a row):

```text
print("It's Syd's turn to do the dishes")
```

```text
print("It's Oli's turn to do the dishes")
```

```text
print("It's Syd's turn to do the dishes")
```

```text
print("It's May's turn to do the dishes")
```

**Hint**: Get a random number using `random.randint` (you'll have to import `random` first)

## Dishes! (solutions)
I'll start off with a list of **names**, which is given, and `import random` so I have access to functions in the `random` module:

```python
import random
names = ['Oli', 'May', 'Jay', 'Mia', 'Ali', 'Syd']
```

The question doesn't ask me to get names from the user, but I could just do this to get the names:

```python
names = input('Who is in your house? ')
names = names.split()
```

Now I'll store a **random** number inside `random_index` between `0` and the *length of the list - 1*. By getting a random number between this range, every index of the list has an equal chance to be selected!

Note that the index should **not** be between `0` and the *length of the list*. To see why, let's use `names` as an example. The `names` list has a length of `6`, as there are six items in the list, **however** the last index is in `5`, because we start counting indexes from `0`!

```python
random_index = random.randint(0, len(names) - 1)
```

Once I have the `random_index`, I can access a specific name:

```python
random_name = names[random_index]
```

Now I'll just print out the `random_name`:

```python
print(f"It's {random_name}'s turn to do the dishes")
```

Here's the complete solution:

```python
import random
names = ['Oli', 'May', 'Jay', 'Mia', 'Ali', 'Syd']
random_index = random.randint(0, len(names) - 1)
random_name = names[random_index]
print(f"It's {random_name}'s turn to do the dishes")
```