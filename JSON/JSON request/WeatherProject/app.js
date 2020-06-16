const http = require('http')
const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    const url = 'http://api.weatherstack.com/current?access_key=8c957241e3bb1e53e6ebe494b42e8318&query=Kolding'
    http.get(url, function (response) {
        console.log(response.statusCode);
        response.on('data', function (data) {
        const weather = JSON.parse(data);
        console.log(weather)
        res.render('index', {
            city: weather.location.name,
            celsius: weather.current.temperature
        })
        });
    });
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});