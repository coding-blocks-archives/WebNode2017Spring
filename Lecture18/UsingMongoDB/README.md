# Using MongoDB

## Installing

Install MongoDB (Community Edition)
Instructions -

Mac OS  <http://cb.lk/mongomac>
Windows <http://cb.lk/mongowin>
Ubuntu  <http://cb.lk/mongoub>

## Run MongoDB

Create a folder `db` inside the project

Then run
```
mongod --dbpath="./db"
```
For windows do not use leading slash
```
mongod --dbpath="db"
```

Check `localhost:27017` to ensure it is running

## Do not use MongoDB everywhere

<http://mongodb-is-web-scale.com/>