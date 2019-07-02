# Exercises

## Welcome
Welcome to your second **exercise pack**!

From now on, we will use the correct HTML structure!

To help out, here's a template you can copy and paste:
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>

  <body>

  </body>
</html>
```

## Your name, redux
Copy the template for a valid HTML document (from the previous page), and add your name to the page.

## Your name, redux (solution)
Here's my solution:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Your name</title>
  </head>

  <body>
    <p>Kacey</p>
  </body>
</html>
```

Recall that the content of a page that should be visible (e.g. your name) go inside `body`.

## Favorite image
Create a **new** folder inside your exercises folder called *images*.

Now, visit [Unsplash](https://unsplash.com), a source of free images, and click on an image that you like, then **download** and save it into the *images* folder.

Create a website to showcase this image! Your website should have the image, **and** a title.

**Hint**: The required `src` for the image element will be `image/NAME.jpg`, where NAME is the name you gave to the photo!

## Favorite image (solution)
For this pack of exercises, I created a folder called `exercises`.

I made another folder **inside** the `exercises` folder called `images`, then saved an images of turtles into a file called `turtles.jpg`.

Here's my solution:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Favorite image</title>
  </head>

  <body>
    <h1>Cool bunch of turtles</h1>
    <img src='images/turtles.jpg' alt='Turtles swimming underwater'/>
  </body>
</html>
```

## Two pages
In the folder you're using for these exercises, create a new file called `about.html` and another file called `home.html`.

In `home.html`, create a **link** to `about.html`. In `about.html`, you should write a short message, so you know you've successfully changed pages!

**Hint**: The `href` attribute's value should be `'about.html'`.

## Two pages (solution)

Here's what my homepage (`home.html`) looks like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>

  <body>
    <h1>Home 🏠</h1>
    <a href="about.html">About</a>
  </body>
</html>
```

Here's what my about page (`about.html`) looks like:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>About</title>
  </head>

  <body>
    <h1>About Me 👋</h1>
    <p>I make websites.</p>
    <a href="home.html">Home</a>
  </body>
</html>
```

## Mark me up!
A newspaper recently published this story about sea lions, but there's just one issue -- they used `div` for everything instead of `article`, `header` and `footer`!

Create a new website that fixes the issues in this article:

```html
<div>
    <div>
        <h1>Koala seen sleeping for 17 hours</h1>
        <p>Article by Joe the Lion</p>
    </div>

    <p>'A local koala has slept in excess of 17 hours,' says Julia the Kangaroo.</p>

    <div>
        <p>Copyright Joe the Lion Press</p>
    </div>
</div>
```

## Mark me up! (solution)
The `article` can have the entire news story. The `header` is good for the introductory content like the article title, while the `footer` can have information such as the copyright text.

Here's an updated version of the article with more relevant HTML container elements used:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Article</title>
  </head>

  <body>
    <article>
        <header>
            <h1>Koala seen sleeping for 17 hours</h1>
            <p>Article by Joe the Lion</p>
        </header>

        <p>'A local koala has slept in excess of 17 hours,' says Julia the Kangaroo.</p>

        <footer>
            <p>Copyright Joe the Lion Press</p>
        </footer>
    </article>
  </body>
</html>
```

## Three websites
When you open your browser, you might be used to opening the same websites one after the other!

What are three websites you visit everyday?

Create a website that could be the new homepage for your browser that links to these websites.

## Three websites (solution)
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Homepage</title>
  </head>

  <body>
    <h1>Websites</h1>
    <ul>
      <li><a href="https://google.com">Google</a></li>
      <li><a href="https://wikipedia.org">Wikipedia</a></li>
      <li><a href="https://github.com">GitHub</a></li>
  </body>
</html>
```