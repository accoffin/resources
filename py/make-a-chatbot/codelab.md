# Make a Pirate Chatbot

## Introducing Captain Featherbot
Ya‑har. Captain Featherbot is pleased to make your acquaintance!

Let's start off with our chatterbot. Captain Featherbot should introduce themselves, ask for the user's name, and then ask them what's on their mind. The Captain should keep letting them talk until the user enters go away (or GO AWAY).

Here's an example interaction:

```text
Arrr, I am Captain Featherbot.
What be your name?
> Sarah
Arrr. Go on...
> This is a strange way to talk to a pirate
Arrr. Go on...
> But it's fun!
Arrr. Go on...
> For a little bit.
Arrr. Go on...
> go away
Shiver me timbers!
Farewell, yer landlubber.
I will be off for more swashbuckling adventures!
```

Here's another example:

```text
Arrr, I am Captain Featherbot.
What be your name?
> Felix
Arrr. Go on...
> I want to go sailing.
Arrr. Go on...
> The ocean looks so pretty.
Arrr. Go on...
> But I don't have a boat.
Arrr. Go on...
> I need a boat to go sailing.
Arrr. Go on...
> Do you have a boat?
Arrr. Go on...
> Will you answer my question?
Arrr. Go on...
```

Notice that the user has to type exactly go away (or GO AWAY) without any other characters on the line for the Captain to stop talking.

Try starting off with this code:

```python
print('Arrr, I am Captain Featherbot.')
print('What be your name?')
name = input('> ')

user_input = input('> ')
while user_input.lower() != 'go away':
    print("I can't hear you.")

print('Shiver me timbers!')
print(f'Farewell {name}, yer landlubber.')
print('I will be off for more swashbuckling adventures!')
```

The code provided will need some fixing to get the required output!

**Hint**: If your code runs in an infinite loop, press **Ctrl + C** on your keyboard.

## Introducing Captain Featherbot (solution)
If you ran the provided code, you would've noticed that there's an infinite loop as each time in the `while` loop we check that `user_input.lower() != 'go away'`. Since `user_input` never changes, the condition is always true and *I can't hear you.* will keep getting printed.

This means we'll have to update `user_input` each time through the loop:

```python
user_input = input('> ')
while user_input.lower() != 'go away':
    print('Arrr. Go on...')
    user_input = input('> ')
```

The other small change is right after `name = input('> ')`, we should print *Arrr. Go on...*.

This is the complete solution:

```python
print('Arrr, I am Captain Featherbot.')
print('What be your name?')
name = input('> ')
print('Arrr. Go on...')

user_input = input('> ')
while user_input.lower() != 'go away':
    print('Arrr. Go on...')
    user_input = input('> ')

print('Shiver me timbers!')
print(f'Farewell {name}, yer landlubber.')
print('I will be off for more swashbuckling adventures!')
```

## Captain Featherbot and the Sea
Let's make Captain Featherbot a bit more interesting to talk to.

Get your answer ready from the last task (we're going to add to it in this task).

Captain Featherbot loves talking about their boat and the sea.

If you mention the word 'boat' or 'sea' while you're talking to them, they will derail the conversation!

Add to your program, such that if you use the word 'boat' in the line, the Captain says: *Oh, I do love my boat, Floaty McFloatface*. Or, if you use the word 'sea' in the line, the Captain says: *Oh, the sea. Arrr to be back on the sea.*

```
Arrr, I am Captain Featherbot.
What be your name?
> Guybrush
Arrr. Go on...
> I have a little row boat
Oh, I do love my boat, Floaty McFloatface.
> That's a nice name for a boat.
Oh, I do love my boat, Floaty McFloatface.
> Yes, you said you like it.
Arrr. Go on...
> But I've never been to the seaside.
Oh, the sea. Arrr to be back on the sea.
> I'd like to go!
Arrr. Go on...
> You're no help!
Arrr. Go on...
```

**Hint**: You might want to use`in`. Try reading this [Stack Overflow question](https://stackoverflow.com/questions/3437059/does-python-have-a-string-contains-substring-method) if you need a refresher.

## Captain Featherbot and the Sea (solution)

This is **just one** possible answer to the assignment.

In my solution, I started with the code inside the while loop just saying *Arrr. Go on...*.

```python
user_input = input('> ')
while user_input.lower() != 'go away':
    print('Arrr. Go on...')
    user_input = input('> ')
```

Given you can use `in` to check if one string is inside another, I'll use `'boat' in user_input` and `'sea' in user_input`  as conditions in my `if` and `elif` (else if) statements.

By adding the conditions and the required printed text, I've met the specification:

```python
user_input = input('> ')
while user_input.lower() != 'go away':
    if 'boat' in user_input:
        print('Oh, I do love my boat, Floaty McFloatface.')
    elif 'sea' in user_input:
        print('Oh, the sea. Arrr to be back on the sea.')
    else:
        print('Arrr. Go on...')

    user_input = input('> ')
```

Keep a hold of your code! In the next task, we'll build upon this code!

## Captain Featherbot, are you listening?
Now Captain Featherbot is starting to have a bit of personality!

Take your answer from the last question, we'll need to add to it in this question.

For lines that end in a question mark, the Captain says: *That be the real question ... I wish I knew.*.

If the line ends in an exclamation mark, the Captain says: *Yo ho ho. That be a good one! Then what?*.

If the line starts with *I feel*, the Captain says: *When I feel that way, I go sailing. What do you do?*.

Here's an example interaction:

```
Arrr, I am Captain Featherbot.
What be your name?
> Bluebeard
Arrr. Go on...
> I'm a pirate!
Yo ho ho. That be a good one! Then what?
> No, that's it.
Arrr. Go on...
> Are you following me?
That be the real question ... I wish I knew.
> Don't follow me!
Yo ho ho. That be a good one! Then what?
> I feel like I'm not being understood.
When I feel that way, I go sailing. What do you do?
> I'll try to explain it a different way.
Arrr. Go on...
```

## Captain Featherbot, are you listening? (solution)

To solve this problem, we'll need to adjust the code:

```python
user_input = input('> ')
while user_input.lower() != 'go away':
    if 'boat' in user_input:
        print('Oh, I do love my boat, Floaty McFloatface.')
    elif 'sea' in user_input:
        print('Oh, the sea. Arrr to be back on the sea.')
    else:
        print('Arrr. Go on...')

    user_input = input('> ')
```

The methods to use are `startswith` and `endswith`. It's worth revising the lesson on *String methods* if you ned a refresher.

Here's the final code:

```python
print('Arrr, I am Captain Featherbot.')
print('What be your name?')
name = input('> ')
print('Arrr. Go on...')

user_input = input('> ')
while user_input.lower() != 'go away':
    if 'boat' in user_input:
        print('Oh, I do love my boat, Floaty McFloatface.')
    elif 'sea' in user_input:
        print('Oh, the sea. Arrr to be back on the sea.')
    elif user_input.startswith('I feel'):
        print('When I feel that way, I go sailing. What do you do?');
    elif user_input.endswith('!'):
        print('Yo ho ho. That be a good one! Then what?');
    elif user_input.endswith('?'): 
        print('That be the real question ... I wish I knew.');
    else:
        print('Arrr. Go on...')

    user_input = input('> ')

print('Shiver me timbers!')
print(f'Farewell {name}, yer landlubber.')
print('I will be off for more swashbuckling adventures!')
```

Excellent work on finishing the project! You've learnt how to solve problems with code, and make a cheeky chatbot as well!

## License
*Copyright Australian Government Department of Education and Training 2017 to present, unless otherwise indicated. This material was downloaded from the Australian Computing Academy website (https://aca.edu.au) on 12 December 2018 and was modified. The material is licensed under CC BY 4.0. The Australian Government Department of Education and Training, University or Academy do not endorse any product or service that uses this material, make any representations as to the quality of such products or services, or is affiliated with or sponsors the provider.*
