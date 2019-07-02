# Exercises

## Exercises
### Part one (optional)
1. Add an alias to your profile (at `~/.bash_profile`) so that you can quickly `cd` into your most used folder.
2. Run `source ~/.bash_profile` to update the profile in your terminal.
3. Try using the alias you just created.

### Part two
Visit [Project Gutenberg](https://www.gutenberg.org/browse/scores/top) and select any book. Download and save a text file of the book. Make sure you download the *Plain Text UTF-8* format.

1. Check the head of the book you downloaded.
2. Use `md5` to compute the MD5 hash of the book.
3. Add one character to the book file.
4. Use `md5` to compute the MD5 hash of the book again.

### Part three
Download the states.txt file from [https://seankross.com/notes/states.txt](https://seankross.com/notes/states.txt) file.

1. Use pipes to figure out how many US states contain the word "New."

## Solutions
### Part one (optional)
```bash
# Add an alias to your profile (at `~/.bash_profile`) so that you can quickly `cd` into your most used folder.
echo "alias docs='cd ~/Documents'" >> ~/.bash_profile

# Run `source ~/.bash_profile` to update the profile in your terminal.
source ~/.bash_profile

# Try using the alias you just created.
docs
```

### Part two
```bash
# Check the head of the book you downloaded.
head book.txt

# Use `md5` to compute the MD5 hash of the book.
md5 book.txt

# Add one character to the book file.
echo 'a' >> book.txt
tail book.txt # Just to confirm the book has been modified

# Use `md5` to compute the MD5 hash of the book again.
md5 book.txt
```

### Part three

```bash
# Use pipes to figure out how many US states contain the word "New."
cat states.txt | grep "New"
```

## License
Exercises are based on [The Unix Workbenck](https://seankross.com/the-unix-workbench/) by Sean Kross, and are used under its [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/).