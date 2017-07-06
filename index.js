var express = require('express');
var quote = require('prog-quote');
var redis = require('redis');
var os = require('os');

var app = express();

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || 'redis';

var client = redis.createClient(
    REDIS_PORT,
    REDIS_HOST
)

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    var nextQuote = quote().next().value;
    client.incr('hits', function(err, hits) {
        res.render('index', {
            userno: hits,
            author: nextQuote.author,
            quote: nextQuote.quote,
            hostname: os.hostname()
        });
    });
});

app.listen(8080, () => {
    console.log("Hello World: Listening on port 8080.")
});
