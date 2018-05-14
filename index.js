var express = require('express');


const app = express();

// This is for the public folder on path /
app.use(express.static('public'));

// this is for images folder on path images
app.use('/images', express.static('images'));

app.get('/', (req, res) =>
    res.send('duder'));

