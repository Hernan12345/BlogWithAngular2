var express = require('express');
var morgan = require('morgan'); // logger
var assert = require('assert');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
require('./src/app/models/postschema');
var Post = mongoose.model('Post');
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
    consumer_key: '',
    consumer_secret: '',
    token: '',
    token_secret: ''
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://hernanuser:Cantalapiedra47@ds031835.mlab.com:31835/mysinglesposts");
var db = mongoose.connection;


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
    
    // Post (Add a New Blog)
    app.post('/addpost', function(req, res, next) { 
        var _post = new Post();
        // Define a model to save 
        _post.id = mongoose.Types.ObjectId();
        _post.title = req.body.title;
        _post.body = req.body.body;
        _post.source = req.body.source;

        _post.save(function(err, post) {
            if(err) return res.status(500).send( err.message);
            res.status(200).jsonp(post);
        });
    });

    // Post (Delete a Blog)
    app.delete('/deletepost/:id', function(req, res, next) {
        Post.findById(req.params.id, function(err, post) {
            post.remove(function(err) {
                if(err) return res.status(500).send(err.message);
                res.status(200).send();
            })
        })
    });


    

   

