DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int(11) NOT NULL auto_increment,
  user_id VARCHAR(100),
  room_id VARCHAR(100),
  text VARCHAR(500),
  createdAt TIMESTAMP,
  PRIMARY KEY (id),
  INDEX (user_id),
  INDEX (room_id)
);

CREATE TABLE users (
  id int(11) NOT NULL auto_increment,
  username VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int(11) NOT NULL auto_increment,
  roomname VARCHAR(100),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

-- CREATE TABLE collection (
--   title VARCHAR(100),
--   artist VARCHAR(100),
--   genre VARCHAR(30),
--   condition VARCHAR(10),
--   worth DOUBLE(2,2),
--   notes TEXT,
--   released DATE,
--   added DATE,
--   opened ENUM('yes','no'),
--   updated TIMESTAMP(14),
--   ID int(11) NOT NULL auto_increment, PRIMARY KEY (ID)
-- )

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

