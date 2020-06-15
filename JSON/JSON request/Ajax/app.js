const http = require('http')
const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    const url = 'http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.send()

    xhr.onload = function () {
        if (xhr.status >= 200 && request.status < 400) {
            const data = JSON.parse(xhr.responseText)
            res.send(data)
        } else {
            console.log('err');
        }
        
    }
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});