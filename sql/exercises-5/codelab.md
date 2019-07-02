# Exercises

## Exercises
Complete these exercises to practice making, then using, your own SQL table!

In DB Browser for SQLite click on *New Database* to create an empty database, then open the *Execute SQL* tab: 
1. Create a table called 'friend' with two columns, one called `id` (which is an `INTEGER` and the `PRIMARY KEY`), and another called `name` (which is `TEXT`)
2. Insert a friend into your table with an ID of `1` (pick a friend's name!)
3. Insert a friend into your table with an ID of `2`
4. Insert a friend into your table with an ID of `3`
5. Insert a friend into your table with an ID of `4`
6. Select the friend with an ID of `4` from your table
7. Delete the friend with an ID of `3`
8. Insert a new friend with an ID of `3` and a name that's `NULL`
9. Select all friends in your `friend` table to verify your changes
10. Drop your `friend` table, WARNING: this will delete all friend data!

## Solutions

```sql
-- Create a table called 'friend' with two columns, one called id (which is an INTEGER and the PRIMARY KEY), and another called name (which is TEXT)
CREATE TABLE friend (
  id INTEGER PRIMARY KEY,
  name TEXT
);

-- Insert a friend into your table with an ID of 1 (pick a friend's name!)
INSERT INTO friend
VALUES (1, 'John');

-- Insert a friend into your table with an ID of 2
INSERT INTO friend
VALUES (2, 'Paul');

-- Insert a friend into your table with an ID of 3
INSERT INTO friend
VALUES (3, 'George');

-- Insert a friend into your table with an ID of 4
INSERT INTO friend
VALUES (4, 'Ringo');

-- Select the friend with an ID of 4 from your table
SELECT *
FROM friend
WHERE id = 4;

-- Delete the friend with an ID of 3
DELETE FROM friend
WHERE id = 3;

-- Insert a new friend with an ID of 3 and name that's NULL
INSERT INTO friend
VALUES (3, NULL);

-- Select all friends to verify your changes
SELECT *
FROM friend;

-- Drop your friend table, WARNING: this will delete all friend data!
DROP TABLE friend;
```