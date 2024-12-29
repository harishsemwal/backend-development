const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/login', (req, res) => {
    res.send("<h1>Welcome to Authentication Page</h1>");
});

app.get('/github', (req, res) => {
    res.send("<h1>Welcome to cheating page..</h1>");
});

app.listen(port, () => {
    console.log(`Server is running on port number ${port} successfully`);
});
