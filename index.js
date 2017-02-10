var express = require('express');
var quote = require('prog-quote');
var redis = require("redis");

var app = express();
var client = redis.createClient('redis://redis/');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    var nextQuote = quote().next().value;
    client.incr('hits', function(err, hits) {
        res.render('index', {
            userno: hits,
            author: nextQuote.author,
            quote: nextQuote.quote
        });
    });
});

app.listen(3000, () => {
    console.log("Hello World: Listening on port 3000.")
});