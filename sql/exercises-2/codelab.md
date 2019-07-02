# Exercises

## Exercises
We're going to continue with our last database. If you've already deleted the database or need a refresher, just follow the instructions from our introductory guide.

Answer these questions with a separate SQL query on the `unisex_names` table: 

1. Select all the rows and columns from the table
2. Select all columns where the `name` is equal to 'Amari'
3. Select just the `name` and `total` columns where the `name` is equal to `'Amari'`
4. Using the `AS` keyword, adjust your last query to rename the `total` column as 'count'
5. Use `IN` to find all rows where the `name` is equal to either `'Amari'`, `'Sage'`, `'Rian'` or `'Tai'`.
6. Find all rows where the `name` is equal to either `'Amari'` or `'John'`. Is `'John'` in the database?
7. Select all rows where the `gap` is greater than 0.3
8. Select all rows where the `female_share` is greater than 0.6
9. Modify your last query to order by the `female_share` in descending order
10. Select all rows where the `gap` is greater than 0.3 and the `female_share` is greater than 0.6. Order by the gap in descending order.
11. Select all names with a pattern of 'A%'
12. Select all names with a lowercase 'a' anywhere in the name
13. Select all names with a lowercase 'a' anywhere in the name OR a uppercase 'A' at the start of the name, order by the name
14. Select all names with a lowercase 'z' anywhere in the name
15. Select all names with a lowercase 'z' anywhere in the name
16. Select all names with an uppercase A then any single character (only two letter names that start with 'A' should be shown)
17. Select all two-letter names
18. Select all three-letter names
19. Select all names that end in 'ler'

## Solutions

```sql
-- Select all rows and columns from table
SELECT *
FROM unisex_names;

-- Select all columns where the name is equal to 'Amari'
SELECT *
FROM unisex_names
WHERE name = 'Amari';

-- Select just the name and total columns where the name is equal to 'Amari'
SELECT name, total
FROM unisex_names
WHERE name = 'Amari';

-- Using the AS keyword, adjust your last query to rename the total column as 'count'
SELECT name, total as count
FROM unisex_names
WHERE name = 'Amari';

-- Use IN to find all rows where the name is equal to either 'Amari', 'Sage', 'Rian' or 'Tai'.
SELECT name, total as count
FROM unisex_names
WHERE name IN ('Amari', 'Sage', 'Rian', 'Tai');

-- Find all rows where the name is equal to either 'Amari' or 'John'. Is 'John' in the database?
SELECT name, total as count
FROM unisex_names
WHERE name IN ('Amari', 'John');
-- ANSWER: No, John is not in the database.
SELECT name
FROM unisex_names
WHERE name = 'John';

-- Select all rows where the gap is greater than 0.3
SELECT *
FROM unisex_names
WHERE gap > 0.3;

-- Select all rows where the female_share is greater than 0.6
SELECT *
FROM unisex_names
WHERE female_share > 0.6;

-- Modify your last query to order by the female_share in descending order
SELECT *
FROM unisex_names
WHERE female_share > 0.6
ORDER BY female_share DESC;

-- Select all rows where the gap is greater than 0.3 and the female_share is greater than 0.6. Order by the gap in descending order.
SELECT *
FROM unisex_names
WHERE gap > 0.3 AND female_share > 0.6
ORDER BY gap DESC;

-- Select all names with a pattern of 'A%'
SELECT name
FROM unisex_names
WHERE name LIKE 'A%';

-- Select all names with a lowercase 'a' anywhere in the name
SELECT name
FROM unisex_names
WHERE name LIKE '%a%';

-- Select all names with a lowercase 'a' anywhere in the name OR a uppercase 'A' at the start of the name, order by the name
SELECT name
FROM unisex_names
WHERE name LIKE '%a%' OR name LIKE 'A%'
ORDER BY name;

-- Select all names with a lowercase 'z' anywhere in the name
SELECT name
FROM unisex_names
WHERE name LIKE '%z%';

-- Select all names with an uppercase A then any single character (only two letter names that start with 'A' should be shown)
SELECT name
FROM unisex_names
WHERE name LIKE 'A_';

-- Select all two-letter names
SELECT name
FROM unisex_names
WHERE name LIKE '__';

-- Select all three-letter names
SELECT name
FROM unisex_names
WHERE name LIKE '___';

-- Select all names that end in 'ler'
SELECT name
FROM unisex_names
WHERE name LIKE '%ler';
```

## Data licenses
Unisex Names data (unisex_names_table.csv)
Original file downloaded from [https://github.com/fivethirtyeight/data/tree/master/unisex-names](https://github.com/fivethirtyeight/data/tree/master/unisex-names). Data is used is licensed under [CC-BY](https://github.com/fivethirtyeight/data/blob/master/LICENSE) via [https://github.com/fivethirtyeight/data](https://github.com/fivethirtyeight/data) by FiveThirtyEight.