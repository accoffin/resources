# Exercises

## Exercises
For each chapter, I have prepared some exercises that you can complete in DB Browser for SQLite. Complete each exercise in the *Execute SQL* tab. Be sure to run your queries regularly using the *Execute* button or *F5*!

Before starting the exercises below make sure you've imported *unisex_names_table.csv* into a SQL database using our guide. The data is provided by FiveThirtyEight, who have analyzed this data for their article [The Most Common Unisex Names In America: Is Yours One Of Them?](https://fivethirtyeight.com/features/there-are-922-unisex-names-in-america-is-yours-one-of-them/).

Try to answer each of these using a separate SQL query on the `unisex_names` table: 
1. Select all the **names** 
2. Select all **names** in ascending order (smallest to largest alphabetically)
3. Select all **names** in descending order (largest to smallest alphabetically)
4. Select **all** rows and columns from table
5. Select just the `name` and `gap` columns from the table
6. Adjust your last query so the rows with the largest `gap` is on the top of the results

## Solutions
Here's my solutions. You can run each query separately by highlighting the SQL query then executing the code.

```sql
-- Select all the names
SELECT name
FROM unisex_names;	

-- Select all names in ascending order (smallest to largest alphabetically)
SELECT name
FROM unisex_names
ORDER BY name ASC;

-- Select all names in descending order (largest to smallest alphabetically)
SELECT name
FROM unisex_names
ORDER BY name DESC;

-- Select all rows and columns from table
SELECT *
FROM unisex_names;

-- Select just the name and gap columns from the table
SELECT name, gap
FROM unisex_names;

-- Adjust your last query so the rows with the largest gap is on the top of the results
SELECT name, gap
FROM unisex_names
ORDER BY gap DESC;
```

Psst ... the lines that start with `--` are known as comments. They are not executed, as they're just notes to the reader of your SQL code.

## Data licenses
Unisex Names data (unisex_names_table.csv)
Original file downloaded from [https://github.com/fivethirtyeight/data/tree/master/unisex-names](https://github.com/fivethirtyeight/data/tree/master/unisex-names). Data is used is licensed under [CC-BY](https://github.com/fivethirtyeight/data/blob/master/LICENSE) via [https://github.com/fivethirtyeight/data](https://github.com/fivethirtyeight/data) by FiveThirtyEight.