# Exercises

## Exercises
To use this database open the **supermarket.db** file from [https://github.com/projectmaterial/sql-data/archive/master.zip](https://github.com/projectmaterial/sql-data/archive/master.zip).

Complete these exercises using tables (`product`, `country`, `price`):

1. Use `SELECT` to see the data in each of the three tables
2. Use `JOIN` to join the `product` and `price` tables, selecting all columns
3. Rewrite your previous query to use aliases, use `prod` as the alias for `product` and `p` as the alias for `price`
4. Join the `product` and `price` tables, only show the `price` and `product_name` in your output
5. Use the `country` table and the `product` table to create a table showing each product's name and the country's name
6. Join the `country` table, the `product` table and the `price` table to create a table showing each product's name, the country's name and the price (Hint: You'll need to use `JOIN` twice)
7. Use a` LEFT JOIN` between `country` and `product`, what `country` has a `NULL` product?

## Solutions
```sql
-- Use SELECT to see the data in each of the three tables
SELECT *
FROM product;

SELECT *
FROM country;

SELECT *
FROM price;

-- Use JOIN to join the product and price tables, selecting all columns
SELECT *
FROM product JOIN price ON product.product_id = price.product_id;

-- Rewrite your previous query to use aliases, use prod as the alias for product and p as the alias for price
SELECT *
FROM product prod JOIN price p ON prod.product_id = p.product_id;

-- Join the product and price tables, only show the price and product_name in your output
SELECT product_name, price
FROM product prod JOIN price p ON prod.product_id = p.product_id;

-- Use the country table and the product table to create a table showing each product's name and the country's name
SELECT country_name, product_name
FROM product JOIN country ON product.country_code = country.country_code;

-- Join the country table, the product table and the price table to create a table showing each product's name, the country's name and the price
SELECT  country_name,  product_name, price
FROM 
  product 
  JOIN country ON product.country_code = country.country_code 
  JOIN price ON price.product_id = product.product_id;
  
-- Use a LEFT JOIN between country and product, what country has a NULL product?
SELECT country_name, product_name
FROM country LEFT JOIN product ON country.country_code = product.country_code;
```