# Buy! Buy! Buy! Sell! Sell! Sell!

## Background
A stock exchange publishes information on the **ten** stocks on the exchange with their price.

We want to buy the stock of a company called *GOOG*, and sell the stock of a company called *CODE*.

## Requirements
Build a program that uses the provided **object** and prints out the amount of money we would have if we **bought** *GOOG* and **sold** *CODE*.

For example given prices of:
```text
const prices = {
    CODE: 100.21,
    GOOG: 212.20,
    BARF: 17.50,
    KNOW: 21.23,
    NETF: 1000.12
}
```

Your code will output:

```text
Money: -111.99
```

We calculated this using *100.21 - 212.20*.

However, as we'll get a new object every second in real life, we don't want to directly calculate *212.20 - 100.21*, instead we want to use the **object keys to get the latest value**!

## Your turn
Download and **unzip** the template from [https://github.com/projectmaterial/js-template/archive/master.zip](https://github.com/projectmaterial/js-template/archive/master.zip).

Add in this code:

```javascript
const prices = {
    CODE: 100.21,
    GOOG: 212.20,
    BARF: 17.50,
    KNOW: 21.23,
    NETF: 1000.12
}

console.log('Money: ');
```

Complete the code so we get the required output.

## Solution
The solution was actually quite simple when you realize you can access a value using `.` and the key.

We can get the purchase price for GOOG using `prices.GOOG`. Similarly, we can get the selling price for CODE using `prices.CODE`.

Then, it's just a matter of subtracting the money earned by selling CODE lost from the money lost by buying GOOG.

```javascript
const prices = {
    CODE: 100.21,
    GOOG: 212.20,
    BARF: 17.50,
    KNOW: 21.23,
    NETF: 1000.12
}

const money = prices.CODE - prices.GOOG;

console.log('Money: ' + money);
```