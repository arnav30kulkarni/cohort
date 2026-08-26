# Types of Database

## NoSQL Database:

- Store data in a `schemaless fashion`, lean and fast way to store data 
- Example - MongoDB

---

## Graph Database:

- Store data in the form of `graph`. Useful in cases where relationships are to be stored (Social Network)
- Example - Neo4j

---

## Vector Database:

- Store data in the form of vectors (store text and asscoiated vectors with them, Text -> Embedding Model -> vector -> vector database).
- Really useful in Machine Learning.
- Example - Pinecone

---

## SQL Database:

- Store Data in the form of `rows` 
- Most fullstack applications use this.
- Example - MySQL, Postgres

--- 

## Connecting to the database via docker: 

For postgres: 

```bash
docker run -e POSTGRES_PASSWORD=your_password -d -p 5432:5432 postgres
```

The connections tring we get from this is 

> postgresql://postgres:mysecretpassword@localhost:5432/postgres

to run commands inside a docker container: 

```bash
docker exec -it container_id /bin/bash 
```

To run commands in the psql via docker containers 

```bash
psql -h localhost -d postgres -U postgres 
```
> Note: psql is a terminal based front-end to PostgreSql, It provides interactive CLI to PostgreSQL (or TimeScaleDB) database. with psql you can type queries to PostgreSQL and get the query result.


---

## Creating an SQL table: 

```SQL
CREATE TABLE USERS (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```
---

# Relationship in SQL

SQL cannot store `objects`, we need to define two different tables to store data

Can't we just store everything in one table? 
> This fails in case a single attribute can have multiple values

- We can relate tables together via foreign key 

```SQL
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(225) NOT NULL,
    pincode VARCHAR(20) NOT NULL,
    created_at TIMESTAMP with TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    -- ON DELETE RESTRICT makes sure that the users table values does not gets deleted if the foreign key referencing the table is not deleted
);
```

- To insert the address of a specific user

```SQL
INSERT INTO aadresses (user_id,city,country,street,pincode)
VALUES (2,"New York","USA","123 braodway st","10001");
```

- To access address of a specific user:
```SQL
SELECT city,country,street,pincode 
FROM addresses
WHERE user_id = 1;
```

--- 

# Transactions in SQL: 

SQL transactions are used when for example we have to insert data into seperate tables, it makes sure both the process ends up in success or if even one fails the query fails to execute

```SQL 
TRANSACTION;

INSERT INTO users (username,email,password)
VALUES ("example1" , "example@gmail.com" ,"secretpass");

INSERT INTO addresses (user_id,city,country,street,pincode)
VALUES (currval('users_id_seq'),"New York","USA","123 braodway st","10001");

COMMIT;
ROLLBACK;
```

---

# SQL joins

In SQL, JOINs are used to combine rows from two or more tables based on related
columns — usually a foreign key in one table referencing a primary key in another.

```SQL
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN on users.id = adresses.user_id 
WHERE users.id = '1';
```
## Types of joins: 

### INNER join 

Returns only the matching rows from both tables.

```SQL
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN on users.id = adresses.user_id;
```

---

### LEFT JOIN 

Returns all rows from the left table (users ), and matching rows from the right
table (addresses ). If no match is found, NULLs are returned.

```SQL
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN on users.id = adresses.user_id;
```

---

### Right JOIN 

Returns all rows from the right table (addresses), and matching rows from the left table (users). If no match is found, NULLs are returned.

```SQL
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN on users.id = adresses.user_id;
```

---

### FULL join
Returns all rows from the left table (users) and the right
table (addresses). If no match is found, NULLs are returned.

```SQL
SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN on users.id = adresses.user_id;
```

---

