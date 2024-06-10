# pro-javascript-backend

Learn backend development with javascript. Learn swagger, express, authentication, payment gateway, cloudinary and more

## Steps to make a cluster on Mongodb Atlas

1. Go to clusters section
2. Click on create cluster
3. Select provider and region
4. Click on create cluster
5. In cluster, click on connect
6. Provide username and password
7. Click on create user and then click on `choose a conncetion method`
8. Select `connect to your application` -> `drivers`, if you want to make it for your application
9. Now copy the `connection string` and replace `<password>` with your actual password of database
10. Click on `done` button

## Steps to connect Compass and Atlas

1. Go to Atlas and then in database section, connect with the desired cluster
2. Click on `compass`
3. Copy the `connection string`
4. Go to compass and paste the `connection string` in the URI
5. Change the `<password>` with your actual password and click on `connect`

## Middlewares

- `app.use(express.json())` = It parses incoming JSON data from HTTP requests
- `app.use(fileUpload())` = If file upload comes up, it adds file object in request object. Like, `req.file`

>Demo: Click [here](./mydocs/app.js) to go to the code

## Swagger

- Swagger is use to write documentation for APIs
- Important [link](https://swagger.io/docs/specification/basic-structure/) to the documentation

## Nodemon

Nodemon works on specific files like `.js`, `.jsx`, etc. but if we want to update the list of extensions, we first need to create a file named `nodemon.json` and then add `{ "ext": ".js, .json, .yaml, .jsx" }` in the file

>Demo: Click [here](/socialApp/nodemon.json) to go to the code

## Enum

We can pass enum values in 2 ways:

```yaml
1. enum:
 - enum1 
 - enum2 
 - enum3
 ... 
```

```yaml
2. enum: [enum1, enum2, enum3, ...]
```

>Demo: Click [here](/mydocs/swagger.yaml) to go to the documentation

## `express-fileupload` Package

This package is use to send and get files(like images) in request and response

- `file.mv(path, errorHandler)` = This method is use to move file to the desired path.

## ORM vs ODM

`ORM (Object Relational Mapping)` is a method that links an application to a relational database (SQL), while `ODM (Object Document Mapper)` is used in non relational database (NoSQL). \
We use `Mongoose` for ODM

## Mongoose

- It allows to define pre and post hooks, enabling pre-defined logic to be executed.
- `Schema` can be considered as a table of SQL database
- `model` is a wrapper of the schema.
- `process.exit(0 / 1)`: This function accepts single parameter (0 or 1).
  - 0 means end the process without any kind of failure.
  - 1 means end the process with some failure.

## Some extra points

- `multipart/form-data` = A data type for media files
- If import is not holded in a variable then it means to execute or run that module. i.e,

```javascript
const express = require('express'); // This line is holding a module in a variable
require('file').function(); // This line is running `function` from `file`
```
