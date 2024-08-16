require('dotenv').config();
require("./passport/passport");

const express = require('express');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const passport = require('passport');
const cookieSession = require('cookie-session');

const { MONGO_URL } = process.env

const app = express()

mongoose.connect(MONGO_URL).then(console.log('DB CONNECTED SUCCESSFULLY')).catch(err => {
    console.log('DB CONNECTION FAILED');
    console.log(err);
    process.exit(1);
})

app.set("view engine", "ejs")

app.use(cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: ['thisissocialloginkey']
}))
app.use(passport.initialize())
app.use(passport.session())

app.use("/auth", auth)


const isLoggedIn = (req, res, next) => {    // It's a middleware
    if (!req.user) {
        res.redirect("/auth/login")
    }
    next()
}

app.get("/", isLoggedIn, (req, res) => res.render("home"))

app.listen(5000, () => console.log(`Server is Listening on 5000...`))