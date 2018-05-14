import express from 'express';


const app = express();
const PORT = 3000;

// This is for the public folder on path /
app.use(express.static('public'));

// this is for images folder on path images
app.use('/images', express.static('images'));

app.get('/', (req, res) =>
    // get data first
    
);

app.post('/newItem', (req, res) =>
    res.send(`a post request with /newItem route on port ${PORT}`)
);

app.put('/item', (req, res) =>
    res.send(`a put request with /item route on port ${PORT}`)
);

app.delete('/item', (req, res) =>
    res.send(`a delete request with /item route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    console.log(data);
});
