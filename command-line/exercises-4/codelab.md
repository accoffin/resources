# Exercises

## Exercises
### Part one
1. Navigate into a folder on your computer with many files.
2. List the contents of the directory.
3. List all files of the most popular file extension, for example all the PDF files.

### Part two
Download the states.txt file from [https://seankross.com/notes/states.txt](https://seankross.com/notes/states.txt) file.

1. Search states.txt for lines that contain the word "New".

### Part three
1. Print out your history file (at `~/.bash_history`)
2. Search your history file for the word "New".

## Solutions
### Part one
```bash
# Navigate into a folder on your computer with many files.
cd ~/Documents

# List the contents of the directory.
ls

# List all files of the most popular file extension, for example all the PDF files.
find *.pdf
```

### Part two
```bash
# Search states.txt for lines that contain the word "New".
grep "New" states.txt
```

### Part three
```bash
# Print out your history file (at ~/.bash_history)
cat ~/.bash_history

# Search your history file for the word "New".
grep "New" ~/.bash_history
```

## License
Exercises are based on [The Unix Workbenck](https://seankross.com/the-unix-workbench/) by Sean Kross, and are used under its [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/).