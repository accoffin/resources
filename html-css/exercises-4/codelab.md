# Exercises

## Welcome
Welcome to your fourth **exercise pack**!

You'll need to download two HTML files for styling: `word-search.html` and `sign.html`.

Download these files from [https://github.com/projectmaterial/css-exercises-4/archive/master.zip](https://github.com/projectmaterial/css-exercises-4/archive/master.zip).

Once you've downloaded these files, open the HTML files in your browser.

## Warning sign

We'll be styling the warning sign in `sign.html` using CSS! Right now it doesn't look very foreboding, open up `sign.css` and add rules to:

1. Make the `h1` a `red` color
2. Give the `div` a `pink` background color

## Warning sign (solution)

```css
h1 {
    color: red;
}

div {
    background-color: pink;
}
```

## Warning sign border

Add another rule to the warning sign to give the sign (in the `div`) a `border` that's `2px solid purple`

## Warning sign border (solution)
```css
div {
    border: 2px solid purple;
}
```

## Warning sign padding and margin
Add another rule to the warning sign to set both the padding and margin of the `div` to `2.5%`

## Warning sign padding and margin (solution)

```css
div {
    padding: 2.5%;
    margin: 2.5%;
}
```

## Word search ID
Now that our sign looks good, let's work on styling a word search I made in `word-search.html`.

Open `word-search.html` and add an `id` of `one` to the first `tr` in the HTML `table`.

**Hint**: `id` is a HTML attribute
**Hint**: Here's an example of adding an id: `<tr id='someId'></tr>`

## Word search ID (solution)
Make sure you've added the `id` to the first `tr`:

```html
<tr id='one' class='word'>
    <td>F</th>
    <td>O</th>
    <td>U</th>
    <td>N</th>
    <td>D</th>
</tr>
```

## Word search ID found
Open `word-search.css` and select the `one` ID and set the color of the selected element to `hotpink`.

## Word search ID found (solution)
You can select an element with a ID of `one` using `#one`:

```css
#one {
    color: hotpink;
}
```

## Word search class found
In `word-search.css`, select the `two` class, then set the color of the selected element to `red`.

## Word search class found (solution)
You can select an element with a class of `two` using `.two`:

```css
.two {
    color: red;
}
```

## Word search found
Set the `background-color` of the `word` class elements to `cyan`.

## Word search found (solution)
```css
.word {
    background-color: cyan;
}
```
