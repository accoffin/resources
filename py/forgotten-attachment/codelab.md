# Forgotten Attachment

## Introduction
Have you ever tried to send an email with an attachment but forgot to attach the file?

Popular email clients, like Gmail and Outlook, can check this for you.

## Requirements
Write a program that checks your email for the string *attach* (exactly in lowercase), and if it's there, reminds you to attach the file. Here is an example:

```text
Email: I will attach the document to this email.
Did you remember the attachment?
```

If *attach* doesn't appear in the email, then print that it was **sent**:

```text
Email: Hi, how are you going?
Sent.
```

*attach* can appear anywhere in the email, even in a longer word:

```text
Email: I have attached a photo.
Did you remember the attachment?
```

## Solution
The first step is to get the **email** from the user:

```python
email = input('Email: ')
```

We can see if a string is inside another using `in`. In this case, I'll want to test that `'attach' in email`.

Since `'attach' in email` evaluates to a **Boolean** (i.e. it is either `True` or `False`) it can be used as a condition in an `if` statement.

When the condition is `True`, let's print out a reminder:

```python
if 'attach' in email:
    print('Did you remember the attachment?')
```

When the condition that `'attach' in email` is `False` we have to say the email can be sent. This is the perfect job for `else` as it adds a block of code to run when the condition of the `if` statement isn't met.

```python
if 'attach' in email:
    print('Did you remember the attachment?')
else:
    print('Sent')
```

The solution for this project is this:

```python
email = input('Email: ')

if 'attach' in email:
    print('Did you remember the attachment?')
else:
    print('Sent')
```

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
