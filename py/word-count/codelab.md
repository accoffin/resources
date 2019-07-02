# Word Count

## Introduction
A word counter, like in Microsoft Word, could use a **dictionary data structure** to store words, and their corresponding word count.

Let's build one!

## Background
Python makes it pretty easy to find the words in a sentence.

To count the words, you can spit a string on each space, then counts up the number of words in the split string.

```python
sentence = "Cody Coder has been hailed as a local hero for coding. Cody said, 'I code'."

words = sentence.split(' ')

print(words)
```

## Requirements

Write a program that accepts a sentence then processes the sentence in order to print out a dictionary containing each word and its corresponding count:

```text
Sentence: i like python
{'i': 1, 'like': 1, 'python': 1}
```

```text
Sentence: Python is a snake. Python is a programming language. What language do you speak?
{'Python': 2, 'is': 2, 'a': 2, 'snake.': 1, 'programming': 1, 'language.': 1, 'What': 1, 'language': 1, 'do': 1, 'you': 1, 'speak?': 1}
```

```text
Sentence: i saw, i came, i coded
{'i': 3, 'saw,': 1, 'came,': 1, 'coded': 1}
```

**Hint**: Use `split` to convert a string into a list of words.
**Hint**: Use `in` to check if the string is already in the dictionary.
**Hint**: Use `not in` to check if the string *is not* already in the dictionary.

## Solution
Let's get the input from the user, then split on the space (in order to get a list of words).

```python
sentence = input('Sentence: ')
words = sentence.split(' ')
```

Just to make sure we've got a list of words, it's worthwhile to print out the words list.

Now, we'll need a dictionary to store the word (as the key) and the count (as the value):

```python
word_count = {}

for word in words:
    print(word)
```

To populate the dictionary, let's loop through every word.

When the word **is not** in the dictionary, we'll set `word_count[word] = 1`. This means we start off the count of a given word at `1`. This is really similar to doing this:

```python
word_count = {}
word_count['Python'] = 1
```

The only difference is we're using the word string stored inside `word`.

Otherwise, we increase the word count by one using `word_count[word] = word_count[word] + 1`. This is similar to doing this:

```python
word_count = {}
word_count['Python'] = 1
word_count['Python'] = word_count['Python'] + 1
```

Notice that once a word's already in the dictionary, we access the dictionary then increase its value by one.

With this in mind, the solution we end up with is this:

```python
sentence = input('Sentence: ')
words = sentence.split(' ')

word_count = {}
for word in words:
    if word not in word_count:
        word_count[word] = 1
    else:
        word_count[word] = word_count[word] + 1

print(word_count)
```