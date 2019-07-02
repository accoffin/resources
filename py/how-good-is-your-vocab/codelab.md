# How Good Is Your Vocabulary?

## Introduction
If you're a fan of hangman you need to know some long words. English has a lot of very [long words](https://en.wikipedia.org/wiki/Longest_word_in_English).

The longest non‐technical word in the English language is antidisestablishmentarianism. At 28 letters it is a very long word.

You want to test your friends' vocabulary by seeing how close they can get to the longest word.

## Requirements
Write a program to read in the longest word your friends can think of and tell them how close they are to the length of "antidisestablishmentarianism":

```text
Long word: incomprehensibilities
It is 7 letter(s) shorter than the longest word.
```

Here is another example:
```text
Long word: unimaginatively
It is 13 letter(s) shorter than the longest word.
```

If the long word is longer than 28 characters, it should print out the negative number of letters:

```text
Long word: supercalifragilisticexpialidocious
It is -6 letter(s) shorter than the longest word.
```

But we all know that's not a *real* word.

## Solution
This sounds like a fun project. Just so I have it handy in the program, I'll keep a hold of the **longest English** word in a **variable**:

```python
longest_word = 'antidisestablishmentarianism'
```

Now, I'll ask the user for the longest word they know:

```python
long_word = input('Long word: ')
```

Now, I have two words in two **variables**, and the question says we should calculate the difference in **length** between the two words.

At this point I remembered you can use `len()` in Python to find out the number of characters a string has. If I didn't remember this I would probably search **Google** (just search *length of string python*)!

Let's calculate the difference of the lengths:

```python
remaining_character_count = len(longest_word) - len(long_word)
```

Finally, we have to tell the user:

```python
print(f'It is {remaining_character_count} letter(s) shorter than the longest word.')
```

All up, this is my program:

```python
longest_word = 'antidisestablishmentarianism'
long_word = input('Long word: ')

remaining_character_count = len(longest_word) - len(long_word)

print(f'It is {remaining_character_count} letter(s) shorter than the longest word.')
```

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
