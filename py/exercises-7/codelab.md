# Exercises
Welcome to your seventh **exercise pack**.

This pack has exercises for revising **files**.

## Family.txt
Create a text file called *family.txt* which has the name of everyone is your family on a separate line like this:

```
Leonardo
Raphael
Donatello
Michelangelo
```

Write a Python program to print out every line in your file.

## Family.txt (solution)

First, you'll need to open the file. By default, the mode will be `'r'` (the reading mode), so you can just use `with open('family.txt')`.

After you have an open file, loop through each line:

```python
with open('family.txt') as f:
    for line in f:
        print(line.strip())
```

You would've noticed that there's a new line after every family member, so use the `strip` method to remove it:

```python
with open('family.txt') as f:
    for line in f:
        print(line.strip())
```

## Creating family
Let's use Python to **make the family file**.

Create a list in Python with all your family members called `family`, like this:

```python
family = ['Leonardo', 'Raphael', 'Donatello', 'Michelangelo']
```

Now, write Python code to write to a file called *new-family.txt*.

Run this code to verify you've created the file properly:

```python
with open('new-family.txt') as f:
    for line in f:
        print(line.strip())
```

## Creating family (solution)
As before, you'll need to open the file. The difference is we have to specify the mode to open in. Since we want to write to the file, let's use the `'w'` (the writing mode).

Once you have an open file (let's call it `f`) you can use a for loop to write every single member to the file. The important thing here is to add a **new line** character to ensure each family member is on a separate line:

```python
with open('new-family.txt', 'w') as f:
    for member in family:
        f.write(member + '\n')
```

Here's the complete solution:
```python
family = ['Leonardo', 'Raphael', 'Donatello', 'Michelangelo']

with open('new-family.txt', 'w') as f:
    for member in family:
        f.write(member + '\n')

with open('new-family.txt') as f:
    for line in f:
        print(line.strip())
```

## File creator
Write a Python program that gets input from the user for the filename, and the content of the file.

Split the content (from the user) on the comma separator and write each line to the file on a new line.

### Example 1
For example:

```text
What is the name of the file? family.txt
What should go inside the file? Leonardo,Raphael,Donatello,Michelangelo
File created!
```

The *family.txt* file should contain:

```text
Leonardo
Raphael
Donatello
Michelangelo
```

### Example 2
```text
What is the name of the file? friends.txt
What should go inside the file? red delicious,granny smith,gala
File created!
```

## File creator (solution)
Let's get the file name and the content (separated by the `,` character):

```python
file_name = input('What is the name of the file? ')
file_content = input('What should go inside the file? ').split(',')
```

Now we'll need to write every line:

```python
with open(file_name, 'w') as f:
    for line in file_content:
        f.write(line + '\n')
    print('File created!')
```

Here's the complete solution:

```python
file_name = input('What is the name of the file? ')
file_content = input('What should go inside the file? ').split(',')

with open(file_name, 'w') as f:
    for line in file_content:
        f.write(line + '\n')
    print('File created!')
```