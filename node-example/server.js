const express = require('express');
const port = 3000;

const app = express();

app.get('/', (req, res) => {
    // res.send('Hello World');  Sending Text Directly
    // res.send('<h1>This should be rendered in HTML</h1>'); Sending HTML directly
    res.sendFile(__dirname + '/index.html');
});


app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});