# Send Me an Email

## Introduction
You're working at Example.com!

At Example.com, each employee (in a huge database) is represented with a Python dictionary like this:

```python
bill = {
    'first': 'Bill',
    'last': 'Doors',
    'id': 1431819
}
```

## Requirements
Write a function called `make_email` which takes an input of an employee dictionary and returns the employee's email address.

The employee emails at `example.com` are of the form *firstlast@example.com*, where the first and last name is joined together in **lowercase**.

For example:

```python
bill = {
    'first': 'Bill',
    'last': 'Doors',
    'id': 1431819
}
print(make_email(bill))
```

Should print `billdoors@example.com`.

```python
jeff = {
    'first': 'Jeff',
    'last': 'Bae',
    'id': 192381
}
print(make_email(jeff))
```

Should print `jeffbae@example.com`.

**Hint**: This question has lots of moving parts! Start by breaking it up into smaller tasks and solve it bit by bit.
**Hint**: You'll probably need the `lower` method
**Hint**: Get a value from a dictionary using `[]`. For example:

```python
times = {
  "jeff": 12.0,
  "elon": 34.5,
  "jesper": 10.2
}

print(times['jeff'])
```

## Solution
I'll start with the function definition. The question suggests we'll only need one parameter for the employee:

```
def make_email(employee):
```

In the function body, I can create the email by joining the first and last names:

```python
username = employee['first'] + employee['last']
```

The only problem is that `username` contains a **mixed case** instead of **lowercase** username, so I'll use the `lower` method which creates a **new** lowercase string:

```python
lower_username = username.lower()
```

Finally, I have to `return` the email address with `@example.com`.

```
return f'{lower_username}@example.com'
```

Here's the solution function with the testing code:

```python
def make_email(employee):
    username = employee['first'] + employee['last']
    lower_username = username.lower()
    return f'{lower_username}@example.com'

bill = {
    'first': 'Bill',
    'last': 'Doors',
    'id': 1431819
}
print(make_email(bill))

jeff = {
    'first': 'Jeff',
    'last': 'Bae',
    'id': 192381
}
print(make_email(jeff))
```

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
