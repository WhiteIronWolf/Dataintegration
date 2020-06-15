const fs = require('fs');
const express = require('express');
const xml2js = require('xml2js');

var parser = new xml2js.Parser();
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    fs.readFile("./movies.xml", "utf-8", function (err, data) {
        parser.parseString(data, function (err, result) {
            res.render('index', {
                title: result.collection.movie[0].title[0],
                genre: result.collection.movie[0].genre[0],
                year:  result.collection.movie[0].year[0]
            })
        });
    })
});

app.listen(3000, function() {
    console.log('Server running on port 3000');
});