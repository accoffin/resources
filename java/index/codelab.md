# Learn Java

## Chapter 1: Java Basics
Coders use an IDE to write programs with. They provide many helpful features like syntax highlighting (coloring the code) and code completion suggestions.

IntelliJ IDEA is an Java integrated development environment (IDE), and it's widely used in industry and by hobbyists alike.

Head on over to [jetbrains.com/idea/download](https://www.jetbrains.com/idea/download/) to download and install IntelliJ IDEA. Be sure to **use the community edition**, it's a free and open-source version of the software. By the way, IntelliJ IDEA is the same software that underlies Android Studio (the official Android IDE).

Once you've installed IntelliJ IDEA have a browse around and check out the [Run IntelliJ IDEA for the first time guide](https://www.jetbrains.com/help/idea/run-for-the-first-time.html) from JetBrains, the creators of IntelliJ.

From the app, you've now learned everything you need to start building basic Java programs!

Complete the first three parts of the ["Create your first Java application" tutorial](https://www.jetbrains.com/help/idea/creating-and-running-your-first-java-application.html) (Create a new project, Write the code, Build and run the application). This is a nice way to get acquainted with using IntelliJ to write real programs.

### Challenge: About me
Now that we know some Java, let's make Java know us!

1. Use IntelliJ to make a file called `AboutMe.java`
1. Create a class called `AboutMe` inside `AboutMe.java`
2. Add a `main` method (`public static void main(String[] args) {}`)
3. Check your program runs (it should do nothing at the moment!)
4. Print out your name
5. Print out your age

### Challenge: Debug the code
An important skill for all coders is to fix buggy code that doesn't work!

Make a file called `BuggyAboutMe.java`, and paste in the following code:

```java
public class BuggyAboutMe {
    public static void main(String[] args) {
        System.print("I am a bug");
        System.out.println('You are not!')
    }
}
```

Can you find and fix all the errors so "I am a bug" and "You are not!" are printed on separate lines?

### Challenge: Approximate age
Let's create a calculator that finds out your age (in whole years).

1. Create a class called `AgeCalculator` (remember, all classes should be in their own file with the name of the class, so this class needs to be inside `AgeCalculator.java`)
2. Print out the current year **less** your age 

## Chapter 2: Storing Data

### Challenge: Approximate age (upgrade)
Complete the previous challenge (the first two steps are repeated here), the upgrade it!

1. Create a class called `AgeCalculator` (remember, all classes should be in their own file with the name of the class, so this class needs to be inside `AgeCalculator.java`)
2. Print out the current year **less** your age 
3. Add comments so you understand what each part is doing
4. Create a variable and store the current year in it
5. Make another variable, this time storing your age
6. Subtract the values of the two variables to find your approximate age

### Challenge: Five times
Sometimes you need to repeat something many times until you get it. Let's make a program to repeat ourselves.

1. Create a variable with a message string
2. Print out the variable five times

### Challenge: Describe why!
Can you describe why this code **does not** work?

You might need to review the lesson on *Type safety* in the app!

```java
public class Main {
    public static void main(String[] args) {
        String suffix = 12345;
    }
}
```

### Challenge: Find the bug
This code (in a file called `Main.java`) has a couple of problems. Can you spot them all?

```java
public class Main {
    public static void main(String[] args) {
        String suffix = " the Owl";
        System.out.println("Jason" + suffix)
        System.out.println(Bourne + suffix)
        System.out.println("Missy" ++ suffix);
        System.out.println("Elliot" + suffix);
    }
}
```

Once you've fixed the program it should print out:

1. Jason the Owl
2. Bourne the Owl
3. Missy the Owl
4. Elliot the Owl

## Chapter 3: Looping and Arrays
### Challenge: Convert the loops
Convert this while loop to instead use a for loop:

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
}
```

Convert this for loop to instead use a while loop:

```java
for (int i = 0; i < 4; i++) {
  System.out.println("You can say that again!");
}
```

### Challenge: Avoid this!
1. Create an array of things to avoid (dancing sharks, funnel-web spiders, etc.)
2. Use a **for loop** to print out each item
3. Now change your code to instead use an iterator

### Challenge: Fix the code
Find and fix all bugs in this code:

```java
class Main {
  public static void main(String[] args) {
    String foods = {"sausages", "onions", "tomato sauce"};

    for (String food : foods) {
      System.out.println "I love eating " + animal;
    }
  }
}
```

Fix the code so it prints out "I love eating sausages", "I love eating onions" and "I love eating tomato sauce".

### Challenge: Using indices

This challenge is to get you used to accessing data from an array using an index (for example, `positions[0]`).

`awards` contains the award winners of a competition:

```java
class Main {
  public static void main(String[] args) {
    String[] awards = {"Alan Turing", "Ada Lovelace", "Grace Hopper", "Larry Page", "Sergey Brin"};
  }
}
```

1. Print out the person is **first place** (using an index)
2. Print out the second person
3. Print out the person in **last place** (using an index)
4. Print out the person in **last place** using `.length` (you'll need to subtract one from the length!) 

## Chapter 4: Booleans

### Challenge: Needle in a haystack 

Complete the code, so that whenever `s` equals `"needle"`, `true` is printed, and `false` is printed in any other case.

```java
class Main {
    public static void main(String[] args) {
        String[] stack = {"hay", "hay", "hay", "hay", "hay", "hay", "hay", "hay"};

        for (String s : stack) {
            System.out.println("found");
        }
    }
}
```

### Challenge: Drink water!
1. Create a variable containing the number of glasses of water you've drunk today
2. Print out a boolean expression that's `true` when the variable stores more than (or equal) `8`, and `false` otherwise

### Challenge: Is that a marsupial?
A marsupial has a pouch and is a mammal. Combine `hasPouch` and `isMammal` so `true` gets printed out when **both** are `true`.

```java
class Main {
    public static void main(String[] args) {
        boolean hasPouch = true;
        boolean isMammal = false;
    }
}
```

## Chapter 5: Branching off
### Challenge: Hello!
1. Create a class called `Greeter`
2. Add in the `main` method with a string containing anybody's name
3. If the string equals your name, print out `"It's me!"`
4. If the string **does not** equal your name, print out `"It's defintely not me"`

### Challenge: Is that a marsupial? upgraded
1. A marsupial has a pouch and is a mammal. Use an if statement to print out `"All extant marsupials are endemic to Australasia and the Americas."` ([courtesy of Wikipedia](https://en.wikipedia.org/wiki/Marsupial)) when the animal is a mammal!

```java
class Main {
    public static void main(String[] args) {
        boolean hasPouch = true;
        boolean isMammal = false;
    }
}
```

### Challenge: Daily target
Assume you have a goal to eat twenty nachos a day.

Create a class and store the amount of nachos you've eaten today.

1. When you have met your goal print out `"Goal met!"`
2. Otherwise, print out `"It's nacho day!"`
3. Extend your solution (using else if), so that when you're eaten more than `30` nachos, your program prints out `"Nacho fast!"`
4. Test your program with different inputs

### Challenge: Write the Java code!

Below is some **pseudocode** (an informal English-like coding language), convert it to the Java programming language!

```python
userChoice = 3

if userChoice == 1:
    print('You will play this game as a pumpkin');
else if userChoice == 2:
    print('You will play this game as a human');
else:
    print('You have died of dysentery');
```

**Hint 1**: Replace `print` with `System.out.println`. Replace `:` with the curly brackets surrounding each block of code. What other syntax is missing?
**Hint 2**: What type should `userChoice` be?
**Hint 3**: You'll need to make a class!

## Chapter 6: Classes
### Challenge: The Movie
1. Create a class for a movie (the class name should be `Movie`, so you'll need a new file called `Movie.java`)
2. Add the `title` (a string) as an attribute, then add at least three other attributes (for example, `year` or the actors in a string array)

Add another file called `Main` and paste in this code:
```java
class Main {
    public static void main(String[] args) {

    }
}
```

Now complete these challenges:
1. Use your `Movie` object and set its attributes to your favorite movie
2. Print out the title of your movie

### Challenge: Design a class
This code does not use a class. Show how you would use Java classes to group the common data into a class.

```java
public class Main {
  public static void main(String[] args) {
    String commonName1 = "Tasmanian blue gum";
    String scientificName1 = "Eucalyptus globulus";

    String commonName2 = "Coast redwood";
    String scientificName2 = "Sequoia sempervirens";

    String commonName3 = "White spruce";
    String scientificName3 = "Picea glauca";
  }
}
```

**Tip**: These are all trees 

## Chapter 7: Methods
### Challenge: Commonly known as ...
Here's one solution to the last challenge:

```java
public class Tree {
    public String commonName;
    public String scientificName;
}
```

1. Add a method in the `Tree` class that prints out the `scientificName` and `commonName` joined together
2. Test your class works by creating a `Tree` object then using your method

### Challenge: Dog food
This incomplete class represents `DogFood` sold in a supermarket.

```java
public class DogFood {
    int stockLevel = 100;

    public void sell() {

    }
}
```

Complete the `sell` method so:
1. It has a parameter (input) of `amountSold`
2. When used, it decreases the stock level by the `amountSold`

Add a new method called `buy`. It should:
1. Have a parameter (input) of `amountBought`
2. When used, it increases the stock level by the `amountBought`

### Challenge: Report card
Complete the `convertGrades` method with one argument - the school test result.

Depending on the number, it should print your grade like A, B, C, or D.

1. If the `testResult` is greater than `90`, your method should return `"A"`
2. Otherwise if it's greater than `80`, return `"B"`
3. Otherwise if it's greater than `70`, return `"C"`
4. In all other cases return `"D"`

```java
public class ReportCard {
    public static void main(String[] args) {
        ReportCard rc = new ReportCard();

        String yourGrade = rc.convertGrades(88);
        System.out.println("Your first grade is " +  yourGrade);

        yourGrade = rc.convertGrades(79);
        System.out.println("Your second grade is " + yourGrade);

        yourGrade = rc.convertGrades(20);
        System.out.println("Your third grade is " + yourGrade);
    }

    public String convertGrades(int testResult) {

    }
}
```

Extension question: Try making `convertGrades` a static method. (Hint: You won't need `ReportCard rc = new ReportCard();` in your program). 

## Chapter 8: Encapsulation
### Challenge: Get the food

Add a getter for the `stockLevel` to this class:

```java
public class DogFood {
    private int stockLevel = 100;

    public void sell(int amountSold) {
        stockLevel = stockLevel - amountSold;
    }

    public void buy(int amountBought) {
        stockLevel = stockLevel + amountBought;
    }
}
```

After adding the getter, show how you would use it in this code:

```java
class Main {
    public static void main(String[] args) {
        DogFood food = new DogFood();
        food.buy(100);
    }
}
```

### Challenge: Set the grade!

Here is a `ReportCard` class.

```java
public class ReportCard {
    private int mark;
    private String grade;

    ReportCard(int m) {
        mark = m;
        grade = calculateGrade();
    }

    public String calculateGrade() {
        if (mark >= 90) {
            return "A";
        } else if (mark >= 80) {
            return "B";
        } else if (mark >= 70) {
            return "C";
        } else {
            return "D";
        }
    }
}
```

Currently, I'm using the class like this:

```java
class Main {
    public static void main(String[] args) {
        ReportCard cookingReport = new ReportCard(90);
        System.out.println(cookingReport.calculateGrade());
    }
}
```

Make the following changes:
1. Create a new setter method that changes the `mark` called `setMark`
2. Create a new getter method for the `grade` called `getGrade`
3. Make `calculateGrade` private
4. Update the code, inside `setMark`, so that it updates the grade using `grade = calculateGrade()` (whenever `setMark` is used)

## Chapter 9: Internals
### Question
Explain the difference between variables with a primitive type, compared to a class type. What does the variable store in each case?

### Challenge: Using this
1. Add parameters to the constructor for all the variables
2. Use `this` inside the constructor to set the attributes

```java
public class Light {
  private boolean isOn;
  private int daysSinceReplacement;

  Light() {

  }
}
```

### Challenge: Fix the code
Fix the Java code so it correctly sets its attributes to the values provided to the constructor as arguments using `this`.

Then fix the `getArea` so it returns the area of the rectangle (the area of a rectangle is given by `width` multiplied by the `height`). 

```java
public class Rectangle {
    private int width;
    private int height;

    Rectangle(int width, int height) {
        width = width;
        height = height;
    }

    public int getArea() {
        return 0;
    }
}
```

## Chapter 10: Introducing Inheritance
### Question
Explain what is inheritance. Can you think of example where you might use inheritance?

## Chapter 11: ArrayLists

### Challenge: Using indices (redux)
`awards` contains the award winners of a competition, this time an `ArrayList` is used:

```java
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        ArrayList<String> awards = new ArrayList<>();
        awards.add("Alan Turing");
        awards.add("Ada Lovelace");
        awards.add("Grace Hopper");
        awards.add("Larry Page");
        awards.add("Sergey Brin");
    }
}
```

1. Print out the person is **first place** (using an index)
2. Print out the second person
3. Print out the person in **last place** (using an index)
4. Print out the person in **last place** using the `size` method (you'll need to subtract one from the size)
5. Remove the second person in the list
6. Print out the entire list 

### Challenge: Best topics
Create an `ArrayList` with your favorite Java topics so far!

Then, use an iterator to print out each topic in the format of `"TOPIC: " + topicName` (where `topicName` is an item from your list).

**Hint**: We saw iterators very early on! For revision, they look like this:

```java
for (String topicName : topics) {

}
```

## Chapter 12: HashMaps

### Challenge: Fix the code
This code has been sloppily copied from the app, can you find and fix all the errors?

```java
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    HashMap<String, string> names = new HashMap<>();

    names.put("TabbyTibby", "Tobias Jr");
    names.put("Meow1999", "Prince III")
    names.put("DylanRocks", "Dylan");

    realName = names.get("Tobias Jr");
    System.out.println("Their real name is " + realName);
  }
}
```

### Challenge: From name to age
1. Create a `HashMap` that stores `String` keys and `Integer` values
2. In the `HashMap`, add your name and age
3. Add the name and age of at least two other people you know
4. Use the `get` method to check the age of yourself
5. Use the `containsKey` method to check if someone who is **not** in your `HashMap` exists

## Additional content licenses
The **Challenge: Report card** and **Challenge: Set the grade!** problems are based on the content of *Java for Kids* by Yakov Fain and is used under a CC-BY license.