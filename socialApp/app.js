const express = require('express');
const format = require('date-format')

const app = express();

const PORT = 5000 || process.env.PORT;

app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello, world!</h1>");
})

app.get("/api/v1/instagram", (req, res) => {
    const obj = {
        username: "syedanas2004",
        followers: 140,
        following: 100,
        date: format("dd : MM", new Date())
    }
    res.status(200).json(obj)
})

app.get("/api/v1/facebook", (req, res) => {
    const obj = {
        username: "anasraza",
        followers: 340,
        following: 310,
        date: format("dd : MM", new Date())
    }
    res.status(200).json(obj)
})

app.get("/api/v1/linkedin", (req, res) => {
    const obj = {
        username: "syedanasraza",
        followers: 200,
        following: 189,
        date: format("dd : MM", new Date())
    }
    res.status(200).json(obj)
})

app.get("/api/v1/:sites", (req, res) => {
    res.status(200).send(req.params.sites)
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))