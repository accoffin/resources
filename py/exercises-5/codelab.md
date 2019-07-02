# Exercises
Welcome to your fifth **exercise pack**.

This pack has exercises in using **methods**. Feel free to use Google to research methods in these exercises!

## Don't shout
Use a **string method** and a **for loop** to print out each artist in `artists` as lowercase text.

```python
artists = ["JAY Z", "BEYONCE", "Frida Kahlo"]
```

## Don't shout (solution)

We can start off our loop like this:

```python
for artist in artists:
    print(artist)
```

Now, we need to figure out the method to convert to lowercase. After a quick search, the string method is called `lower`.

Here's the complete solution:

```python
artists = ["JAY Z", "BEYONCE", "Frida Kahlo"]

for artist in artists:
    print(artist.lower())
```

## Hidden message
You've been given a list of jumbled strings. For each string, if the string has a keyword of `'wally'`, print out `'Found Wally.'`, otherwise print out `'Wally is not here.'`.

```python
jumbled_strings = ["fn834fijwallyndfin3f34f94pnwkawallwaldmsldawallwally", "wwwwwiwiiwiwiwiwdoally", "wadlmsdmwlawallywaawlldlalwmallmdlsamlmlwmalmlwadmlwwall", "wallwallwalldoordoordoordoor", "wallyaisdnieianwallywadjsaindwallydnwidnwainwa", "wawawwawwawallllllllllyywyaiesiesieswallies"]
```

If your program is correct, your output should be:

```
Found Wally.
Wally is not here.
Found Wally.
Wally is not here.
Found Wally.
Wally is not here.
```

## Hidden message(solution)

Let's start off with a for loop.

```python
jumbled_strings = ["fn834fijwallyndfin3f34f94pnwkawallwaldmsldawallwally", "wwwwwiwiiwiwiwiwdoally", "wadlmsdmwlawallywaawlldlalwmallmdlsamlmlwmalmlwadmlwwall", "wallwallwalldoordoordoordoor", "wallyaisdnieianwallywadjsaindwallydnwidnwainwa", "wawawwawwawallllllllllyywyaiesiesieswallies"]

for jumbled_string in jumbled_strings:
    print(jumbled_string)
```

Now, to check if one string is in another, we can use `in`.

For example:

`print('wally' in "fn834fijwallyndfin3f34f94pnwkawallwaldmsldawallwally")`

This returns `True` when `'wally'` is inside the string.

The next part of the question calls for an if/else statement! That's because we want the code to behave differently based on what the string has.

Here's what I ended up with:

```python
jumbled_strings = ["fn834fijwallyndfin3f34f94pnwkawallwaldmsldawallwally", "wwwwwiwiiwiwiwiwdoally", "wadlmsdmwlawallywaawlldlalwmallmdlsamlmlwmalmlwadmlwwall", "wallwallwalldoordoordoordoor", "wallyaisdnieianwallywadjsaindwallydnwidnwainwa", "wawawwawwawallllllllllyywyaiesiesieswallies"]

for jumbled_string in jumbled_strings:
    if 'wally' in jumbled_string:
        print('Found Wally.')
    else:
        print('Wally is not here.')
```

## Random numbers
Recall this code from an earlier exercise to generate random numbers **between 1 and 10**:

```python
import random
print(random.randint(1, 10))
```

Create a list called `random_numbers` and store twenty random numbers (between 1 and 10) in this list.

Use a for loop and the `append` method in your answer.

## Random numbers (solution)

The question wants us to use a for loop. Let's try using a for loop to generate twenty random numbers.

```python
import random

random_numbers = []

for i in range(1, 10):
    print(random.randint(1, 10))
```

Since I don't use the value of `i` (which takes on values from `1`, `2`, `3`, and so on), it's common to use `_` as the variable name instead!

```python
import random

random_numbers = []

for _ in range(1, 10):
    print(random.randint(1, 10))
```

All right, now to `append` to the list.
```python
import random

random_numbers = []

for _ in range(1, 10):
    random_number = random.randint(1, 10)
    random_numbers.append(random_number)

print(random_numbers)
```

## Which country?
You're given this unfinished code:

```python
places = ['Melbourne, Australia', 'Perth, Scotland', 'Brisbane, California', 'Sydney, Australia', 'Sydney, Florida', 'Melbourne, Florida']
filtered_places = []

for place in places:
    if place == 'Perth, Scotland':
        print('Found Scotland!')

print(filtered_places)
```

Change the code inside the for loop so whenever the `place` in `places` **ends with** `'Australia'` the name is placed in the `filtered_places` list.

Here's what `filtered_places` should have when your code is correct:

```python
filtered_places = ['Melbourne, Australia', 'Sydney, Australia']
```

Only change the code inside the for loop!

## Which country? (solution)
Let's change the condition inside the if statement.

We only want to consider the place when it ends with a string. This sounds like the `endswith` method:

```python
places = ['Melbourne, Australia', 'Perth, Scotland', 'Brisbane, California', 'Sydney, Australia', 'Sydney, Florida', 'Melbourne, Florida']
filtered_places = []

for place in places:
    if place.endswith('Australia'):
        print('Found Australia!')
```

This code now just needs to append the matches to `filtered_places`, that's the `append` method's job:

```python
places = ['Melbourne, Australia', 'Perth, Scotland', 'Brisbane, California', 'Sydney, Australia', 'Sydney, Florida', 'Melbourne, Florida']
filtered_places = []

for place in places:
    if place.endswith('Australia'):
        filtered_places.append(place)

print(filtered_places)
```


## Fibonacci numbers
In the lessons, you used Python code to find Fibonacci numbers.

I want to find the first ten numbers, but have mucked up the code!

Fix all bugs in the provided code!

```python
fib = [0, 1, 1]

for i in range(5):
fib.append(fib[n] + fib[n - 1])

print(fib)
```

## Fibonacci numbers (solution)
`n` is not defined at all! In the lessons, we said `n` was equal to the length of the list -- that's `len(fib)` in Python code.

The code in the for loop **needs to be indented**.

`fib[n] + fib[n -1]` is wrong as it accesses invalid indexes. The formula for Fibonacci involves adding the **last two numbers** which can be calculated with `fib[n - 1] + fib[n - 2`.

Using `range(5)` only generates eight numbers. We want 10 numbers, so I had to change the code to use `range(7)`.

Here's the correct solution:

```python
fib = [0, 1, 1]

for i in range(7):
    n = len(fib)
    fib.append(fib[n - 1] + fib[n - 2])

print(fib)
```
