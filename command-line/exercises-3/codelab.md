# Exercises

## Exercises
1. Create a file called `message.txt` in your home directory and move it into another directory.
2. Copy the `message.txt` you just moved into your home directory.
3. Delete both copies of `message.txt`. Try to do this without using `rm`.

## Solutions
```bash
# Create a file called message.txt in your home directory and move it into another directory.
cd ~
touch message.txt
mv message.txt workbench

# Copy the message.txt you just moved into your home directory.
cp workbench/message.txt ~

# Delete both copies of message.txt. Try to do this without using rm.
# On macOS
mv workbench/message.txt ~/.Trash
mv message.txt ~/.Trash

# On Ubuntu
mv workbench/message.txt ~/.local/share/Trash
mv message.txt ~/.local/share/Trash

# On Windows
mkdir ~/Trash
mv workbench/message.txt ~/Trash
mv message.txt ~/Trash
```

On Windows, there isn't a trash folder, but you can create your own folder for this purpose. **NB:** You can directly delete a file using `rm`, but you won't be able to recover the file (without recovery software, which might not work).

## License
Exercises are based on [The Unix Workbenck](https://seankross.com/the-unix-workbench/) by Sean Kross, and are used under its [CC0 license](https://creativecommons.org/publicdomain/zero/1.0/).