# Exercises
Welcome to your sixth **exercise pack**.

This pack has exercises for revising **dictionaries and sets**.

## Nicknames

Show how you would create a **dictionary** of names (the key) to nicknames (the value) for your friends in Python.

You can also use this information if you don't give your friends nicknames:

* Key: Brooke, Value: Brookie
* Key: Florence, Value: Flo
* Key: Julia, Value: Jules 
* Key: Federico, Value: Fede

## Nicknames (solution)
A dictionary is a collection of **key-value** pairs.

In this case, both the **keys** and **values** are **strings**. 

Let's make one for our friend's nicknames:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}
```

## Get the nickname
```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}
```

Given some input from the user, print out the nickname of your friend.

```text
Friend: Brooke
I call them Brookie!
```

```text
Friend: Florence
I call them Flo!
```

```text
Friend: Julia
I call them Jules!
```

If the user gives you invalid input, crash.

## Get the nickname (solution)

Remember, we can look up a value using its **key**.

The **key** in this case is the real name of the person, the **value** is the nickname.

With `friend` storing the user input, you can use `friends[friend]` to lookup the nickname:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}

friend = input('Friend: ')
nickname = friends[friend]
print(f"I call them {nickname}")
```

## Fixing 'Get the nickname'

Use this code from the previous exercise:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}

friend = input('Friend: ')
nickname = friends[friend]
print(f"I call them {nickname}")
```

Given some input from the user, print out the nickname of your friend.

```text
Friend: Brooke
I call them Brookie!
```

```text
Friend: Florence
I call them Flo!
```

```text
Friend: Julia
I call them Jules!
```

**When the friend does not exist**, print out a message informing the user the key doesn't exist.

```text
Friend: Henri
I don't know them.
```

```text
Friend: Pablo
I don't know them.
```

## Fixing 'Get the nickname' (solution)

Try running the original code to confirm that the program crashes when the friend (the key) doesn't exist:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}

friend = input('Friend: ')
nickname = friends[friend]
print(f"I call them {nickname}")
```

We need to check that the friend exists **before** using `friends[friend]`. You can check if a key exists using `in`.

To test this out, try running this code:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}

print('Federico' in friends)
print('Henri' in friends)
```

Since `in` returns a Boolean, we can use it as a condition in an if statement:

```python
friends = {
    'Brooke': 'Brookie',
    'Florence': 'Flo',
    'Julia': 'Jules',
    'Federico': 'Fede'
}

friend = input('Friend: ')

if friend in friends:
    nickname = friends[friend]
    print(f"I call them {nickname}")
else:
    print("I don't know them.")
```

## Unique movies
I've asked Brooke, Florence, Julia and Federico what movie we should watch on Tuesday.

```python
movies = ['Citizen Kane', 'Citizen Kane', 'Casablanca', 'Toy Story' ]
```

How can use use a **set** to find the unique responses?

## Unique movies (solution)

A set only has unique values.

To use set, wrap the list inside `set()`:

```python
movies = set(['Citizen Kane', 'Citizen Kane', 'Casablanca', 'Toy Story' ])

print(movies)
```

## Favorite movies
I've created a set of Brooke's favorite movies:

```python
favorites = {'The Empire Strikes Back', 'The Wizard of Oz', 'Toy Story', 'Frozen', 'The Sound of Music', 'Stand By Me', 'Spirited Away', 'The Wind Rises'}
```

Do you like the same films? Write a Python program, that gets some user input for their favorite film, then checks the set for a match.

When the film is in the set, print out *That's a match!*:

```text
What's your favorite film? Toy Story
That's a match!
```

Otherwise, print out *Great movie, but not one of Brooke's favorites.*:

```text
What's your favorite film? Raiders of the Lost Ark
Great movie, but not one of Brooke's favorites.
```

## Favorite movies (solution)

To check for membership of a set use `in`:

```python
favorites = {'The Empire Strikes Back', 'The Wizard of Oz', 'Toy Story', 'Frozen', 'The Sound of Music', 'Stand By Me', 'Spirited Away', 'The Wind Rises'}

your_favorite_film = input("What's your favorite film? ")

if your_favorite_film in favorites:
    print("That's a match!")
else:
    print("Great movie, but not one of Brooke's favorites.")
```