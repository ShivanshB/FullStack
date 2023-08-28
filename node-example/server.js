const express = require('express');
const fs = require('fs');
const port = 3000;
let totalViews = 0

const app = express();

if (fs.existsSync('views.txt')) {
    totalViews = parseInt(fs.readFileSync('views.txt', 'utf8'));
}
    

app.get('/', (req, res) => {
    // res.send('Hello World');  Sending Text Directly
    // res.send('<h1>This should be rendered in HTML</h1>'); Sending HTML directly
    totalViews++;

    fs.writeFileSync('views.txt', String(totalViews));

    let html = fs.readFileSync(__dirname + '/index.html', 'utf8')
    html = html.replace('{{views}}', totalViews)
    res.send(html);
});



app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});