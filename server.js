const express = require('express');
const session = require('express-session');

const app = express();

const PORT = 3000;

app.get('/' ,(req, res) => {
    res.send('hello');
})

app.get('/hello/:name/:age', (req, res) => {
    res.send(req.params.name + " " + req.params.age);
})

app.listen(PORT, () => {
    console.log("server is running at http://localhost:3000");
})