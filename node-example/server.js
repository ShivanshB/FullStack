const express = require('express');
const fs = require('fs');
const port = 3000;
let totalViews = 0

const app = express();

// if (fs.existsSync('views.txt')) {
//     totalViews = parseInt(fs.readFileSync('views.txt', 'utf8'));
// }
    
function getCookie(cookieString, name) {
    if (cookieString) {
        let cookie = cookieString.split(';').find(cookie => cookie.trim().startsWith(`${name}=`));
        return cookie.split('=')[1];
    }
    else {
        return 0;
    }
}

app.get('/', (req, res) => {
    // res.send('Hello World');  Sending Text Directly
    // res.send('<h1>This should be rendered in HTML</h1>'); Sending HTML directly
    let totalViews = getCookie(req.headers.cookie, 'views');

    totalViews++;

    // fs.writeFileSync('views.txt', String(totalViews));

    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    html = html.replace('{{views}}', totalViews);

    res.setHeader('Set-Cookie', `views=${totalViews}`);
    res.send(html);
});



app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});