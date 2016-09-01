var express = require('express');
var morgan = require('morgan'); // logger
var assert = require('assert');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
    consumer_key: 'K7HN5nYgouqnMwCPTO47dcXF0vGq0GTxHeFNaKnZIX7aFD0v1M',
    consumer_secret: 'ikuNfdUI0tJobcMioXszS642EYwq1uFzj8v1hmoWU4Zy4xEo2E',
    token: '0FInyFb3AFY8vtrqpSUoUCyH0yEsS7pTGs5Acp0a7JfTLb74QT',
    token_secret: '6HXBv4vnkrfwZLrUJA2RjVGCu84YmMakEoZHk1PssEBRZhTMYO'
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));



//middleware to log all requests
app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

	return next();
});


app.use(router);


    
    app.listen(3000, function() {
        console.log('Angular app listening on port 3000');
    });
    
    // select all
    app.get('/posts', function(req, res, next) {
        client.blogPosts('hernanleandro', function(err, resp) {
            res.json(resp.posts); // now we've got all kinds of posts
        });
    });
    


    

   

