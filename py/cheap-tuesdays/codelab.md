# Cheap Tuesdays

## Introduction
Your local cinema has a special on Tuesdays, so tickets are cheap! However, you want to hang out with your friends, so you are happy to go on any day.

## Requirements
Write a program to organize a day. If it's Tuesday, the program should print *Great! Tuesdays are
cheap*. For example:

```text
When can we see a movie? Tuesday
Great! Tuesdays are cheap.
I want to see Finding Dory.
```

If it's not Tuesday, you should still go to the movies:

```text
When can we see a movie? Wednesday
I want to see Finding Dory.
```

Any answer other than Tuesday should work the same way:

```text
When can we see a movie? Wednesday
I want to see Finding Dory.
```

### Extension task (optional)
When the day is Wednesday, print out *Tuesdays would be better!*.

```text
When can we see a movie? Wednesday
Tuesdays would be better!
I want to see Finding Dory.
```

When the day is Saturday, print *Perfect, that's my day off.*:

```text
When can we see a movie? Saturday
Perfect, that's my day off.
I want to see Finding Dory.
```

## Solution
The first step is to get the **day** from the user:

```python
day = input('When can we see a movie? ')
```

We can check if one string is the same as another using `==`, and since `day == 'Tuesday'` evaluates to a **Boolean** (i.e. it is either `True` or `False`) it can be used as a condition in an `if` statement.

```python
if day == 'Tuesday':
    print('Great! Tuesdays are cheap.')
```

Great! We've got the condition working. Now, even when the day isn't Tuesday, we need to print out *I want to see Finding Dory.*:

```python
print('I want to see Finding Dory.')
```

The code **should not** be inside the if statement, as it always runs. Here's the code for the solution (without the extension task):

```python
day = input('When can we see a movie? ')

if day == 'Tuesday':
    print('Great! Tuesdays are cheap.')

print('I want to see Finding Dory.')
```

### Extension
The extension gets us adding additional conditions!

```python
day = input('When can we see a movie? ')

if day == 'Tuesday':
    print('Great! Tuesdays are cheap.')

if day == 'Wednesday':
    print('Tuesdays would be better!')

if day == 'Saturday':
    print("Perfect, that's my day off.")

print('I want to see Finding Dory.')
```

Now, we could also use an `elif` statement instead! Since the user can only input **one of the days**, the two ways to write the code are equivalent.

```python
day = input('When can we see a movie? ')

if day == 'Tuesday':
    print('Great! Tuesdays are cheap.')
elif day == 'Wednesday':
    print('Tuesdays would be better!')
elif day == 'Saturday':
    print("Perfect, that's my day off.")

print('I want to see Finding Dory.')
```

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
