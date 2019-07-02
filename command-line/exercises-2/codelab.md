# Exercises

## Exercises
1. Create a new directory called `workbench` in your home directory.
2. Without changing directories, create a file called `readme.txt` inside of 
`workbench`.
3. Append the numbers 1, 2, and 3 to `readme.txt` so that each number appears on its own line.
4. Print `readme.txt` to the command line.
5. Use output redirection to create a new file in the `workbench` directory called `list.txt` which lists the files and folders in your home directory.
6. Find out how many characters are in `list.txt` without opening the file or printing it to the command line.

## Solutions

```bash
# Create a new directory called workbench in your home directory.
cd ~
mkdir workbench

# Without changing directories, create a file called readme.txt inside of workbench.
touch workbench/readme.txt

# Append the numbers 1, 2, and 3 to readme.txt so that each number appears on its own line.
cd workbench
echo 1 >> readme.txt # or echo 1 > readme.txt
echo 2 >> readme.txt
echo 3 >> readme.txt

# Print readme.txt to the command line.
cat readme.txt

# Use output redirection to create a new file in the workbench directory called list.txt which lists the files and folders in your home directory.
ls > list.txt

# Find out how many characters are in list.txt without opening the file or printing it to the command line.
wc list.txt
```

## License
Exercises are based on [The Unix Workbenck](https://seankross.com/the-unix-workbench/) by Sean Kross, and are used under its [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/).