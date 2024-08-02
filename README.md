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

1. `app.use(express.json())` = It parses incoming JSON data from HTTP requests.
    >Code: [express.json](./mydocs/app.js)

2. `app.use(express.urlencoded({ extended:true }))` = If the form is passed in query then we need to encode the url which is done by this middleware. `{ extended:true }` is optional if we provide this then it'll work for the object having children and grandchildren objects in it, like,\
`{"name":{"first":"Anas","last":"Raza"}}`

3. `app.set("view engine", "ejs")` = This is use for rendering web pages. The term 'View engine' allow us to render web pages using template files and 'ejs' is the type of view engine.

4. In routes, we can pass middleware in such a way, `route.get('/abc/def',middleware, controllerMethod)`

>Code: [fileUpload, View engine and urlencoded](./ejsAndCloudinary/app.js)

## Swagger

- Swagger is use to write documentation for APIs
- Important [link](https://swagger.io/docs/specification/basic-structure/) to the documentation

### Installation

- Run `npm install swagger-ui-express yaml`
- Import:

```javascript
const swaggerUi = require('swagger-ui-express');
const fs = require("fs");
const YAML = require('yaml');
```

- Make instance:

```javascript
const file = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file);
```

- Use middleware:

```javascript
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

- Now create a file named `swagger.yaml` (that you passed in `fs.readFileSync`)

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

## NPM Packages

### express-fileupload

This package is use to send and get files(like images) in request and response. After passing this as a middleware, there is a field added to the request object, `req.files`.

- `file.mv(path, errorHandler)` = This method is use to move file to the desired path.
- `app.use(fileUpload())` = If file upload comes up, it adds file object in request object. Like, `req.file`. Sometimes it's called with a params, like\
`app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }))`:
  - `useTempFiles` is true if you want to store image in a temporary directory.
  - `tempFileDir` is the path to the temporary directory.
  We can make it default by passing nothing in the parameters. But the actual difference is that default uses memory instead of the disk space which will make the system, but it's quicker to access. In short, passing these parameters is generally suitable for larger applications.

>Code: [Here](./mydocs/app.js)

### bcryptjs

This package is use for encryptions

- `bcryptjs.hash(value, n=10)` = This is method that encrypts the value. There is an algorithm that converts the value into encrypted form, where `n` is the number of turns that this algorithm should run. More the turns more complex encryption.
- `bcryptjs.compare(Entered password, password from database)` = This method compares the password against the password stored in the database.

>Code: [Here](./authSystem/app.js)

### jsonwebtoken

This package is use for generating tokens. A token is an important and secret part of key to your data. It is secure. It contains values of your payload. It should be kept private as password.

- `jwt.sign(payload, secret_key, options)` = This function is use to generate a token. It takes 3 parameters:
  - payload: Object of your request body. It can contain 1 - all fields.
  - secret_key: A key which can be anything.
  - options: There're 2 options:
    - Token expires in
    - Algorithm process: Default is `HS256` which is highly safe and secure.
- `jwt.verify(token, secret_key)` = This method verifies the token if it's valid or not. The validation method returns a decode object that we stored the token in.

>Code: [Here](./authSystem/app.js)

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
- Sometimes database operations take time so making them asynchronous is a better approach.
- `select: boolean (default: true)`: Whenever you fetch a document from the database, the field with this key will not be included in the result if it is `false` unless you explicitly include it. You can fetch it as `Model.find({}).select('+field')`
- `Schema.pre('event',function(next){...})`: It runs before specific events. Events can be:
  - save: Runs before a document is saved.
  - validate: Runs before a document is validated.
  - remove: Runs before a document is removed.
  - find: Runs before a find query is executed.
  - update: Runs before an update query is executed.
- `model.save({ validateBeforeSave: false })`: This method is used to save a document to the database. There's no need to pass any argument to this method. If `validateBeforeSave` is false, then it'll not check the validations of the model before saving.

## Token in postman

To send token in the headers of a postman, you need to follow these steps:

1. Go to `Headers` section
2. Enter `Authorization` as the key
3. Enter `Bearer token` as the value (without single or double quotes)

We can also send the token through Authorization section:

1. Go to `Authorization` section
2. Select `Bearer Token` as Auth Type
3. Pass the token in the `Token` field (without single or double quotes)

## View Engine / ejs

'View engine' allows us to render web pages using template files and 'ejs' is the type of view engine. For view engines, the structure is that we need to make a folder named `views` and inside that folder there are HTML files with `.ejs` extension that needed to be rendered. In the main file there's a need of middleware,\
`app.set("view engine", "ejs")`, where 'ejs' is the type of view engine

## Structure of a backend folder

### configs

This folder contains the configuration of the server, like connecting to the database.

### controllers

This folder contains the logic and functionality of all the models, pages and controllers.

### middlewares

This folder contains the middlewares.

### models

This folder contains the models of database, in which the models are defined.

### routes

This folder contains the routes for all the controllers and models. It imports the controllers and put it in the specific route and export it to `app.js` or `index.js`.\
These routes works as a middleware in the main file, or we can say that we have to use these in `app.use('/api/v1', routeMethod)`

```javascript
const express = require('express')
const { a,b,c,... } = require('../controllers/home')

const router = express.Router()

router.route('/').get(a)
router.route('/b').get(b)
router.route('/c').get(c)
// More routes...

module.exports = router
```

### utils

This folder contains any functions and logics that can be needed in controllers

## Cloudinary

You need `account name`, `api key`, and `api secret`. Then import cloudinary and then do this:

```javascript

```

It should be connected in the file that runs like `app.js` or `index.js`.

## Nodemailer.com

It's a module for Node.js applications that allows email sending. Here's the [link](https://nodemailer.com/about/)

## Mailtrap.io

It's Email Delivery Platform that allows customers to manage the email infrastructure, for testing, sending,etc. We can put the code / credentials from mailtrap to nodemailer. Follow these steps:

1. Go to [https://mailtrap.io/inboxes](https://mailtrap.io/inboxes)
2. Select `My Inbox`
3. Scroll down and select `Node.js`
4. Copy and paste the code

>Important: These credentials are not meant to be pushed to git or somewhere else, so make sure to put these credentials in `.env` file.

## Query replacement using Regex

Whenever you pass parameters in query like: `https://localhost:5000/product?search=coder&page=2&category=shortsleeves&rating[gte]=4&price[lte]=999&price[gte]=199`, it converts in an object like:

```javascript
req.query = {
  search=coder,
  page=2,
  category=shortsleeves,
  rating[gte]=4,
  price[lte]=999,
  price[gte]=199
}
```

>Important URL - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>

```javascript
const p = 'gte gte lte mygte gtetest'
const regex = /\b(gte|lte|...)\b/g
console.log(p.replace(regex, m => `$${m}`))

--------------------------------------------

Output: `$gte $gte $lte mygte gtetest`
```

The matching keys are:

- `gte` = Greater than and equal to (>=)
- `gt` = Greater than (>)
- `lte` = Less than and equal to (<=)
- `lt` = Less than (<)
- `eq` = Equal to (==)
- `ne` = Not equal to (!=)
- `in` = Not In
- `nin` = Not in

## Regex in MongoDB

`$regex` operator in MongoDB is used to perform pattern matching using regular expressions in queries. This operator can be used in various scenarios to filter documents based on string patterns.

### Syntax

```javascript
1. model.find({ <field>: { $regex: /pattern/, $options: '<options>' } })
2. model.find({ "<field>": { "$regex": "pattern", "$options": "<options>" } })
3. model.find({ <field>: { $regex: /pattern/<options> } })
```

### Example

Imagine you have a collection of user documents with fields such as username, email, and phone. You might want to:

- Search for users with usernames containing "john" (case-insensitive):\
`db.users.find({ username: { $regex: "john", $options: "i" } });`

- Find all users with email addresses from a specific domain (e.g., "@example.com"):\
`db.users.find({ email: { $regex: "@example\\.com$" } });`

- Validate that phone numbers follow a specific pattern (e.g., "123-456-7890"):\
`db.users.find({ phone: { $regex: "^[0-9]{3}-[0-9]{3}-[0-9]{4}$" } });`

## Some extra points

- `multipart/form-data` = A data type for media files
- If import is not holded in a variable then it means to execute or run that module. i.e,

```javascript
const express = require('express'); // This line is holding a module in a variable
require('file').function(); // This line is running `function` from `file`
```

- `enctype="multipart/form-data"` = This is added in the (HTML / frontend) as an attribute of the  form for handling images and files.
- We can put the functionality in the promise to manage multiple asynchronous operations, associating handlers with success or failure. Like this [promise](./tShirtStore/middlewares/) and [inner features](./tShirtStore/controllers/home.js).\
We can also use the `trycatch` for that just as it is done in [authSystem](./authSystem/app.js)
