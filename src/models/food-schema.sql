DROP TABLE IF EXISTS foods;

 -- varchar(255) : this will be a string its length won't exceed 255 characters
 -- primary key is a unique identifier that we use with relations.
 -- serial == auto increment + integer

CREATE TABLE foods(
  id SERIAL PRIMARY KEY,
  name varchar(255),
  cuisine varchar(255)
)