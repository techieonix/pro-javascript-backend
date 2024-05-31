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

## Middlewars

- `app.use(express.json())` = This line tells that the data in in JSON format
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

## `express-fileupload` Package

This package is use to send and get files(like images) in request and response

- `file.mv(path, errorHandler)` = This method is use to move file to the desired path.

## Some extra points

- `multipart/form-data` = A data type for media files
