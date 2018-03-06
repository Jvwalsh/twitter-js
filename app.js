// import {
//     request
// } from 'http';




var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var port = process.env.PORT || 3000;
const routes = require('./routes');


// app.use('/', routes);

var router = express.Router();
console.log('test');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));

// router.get('/', function(req, res){
//     console.log("hello world from app.js");
//     res.
// });
const tweetBank = require('./tweetBank');

router.get('/', function (req, res) {
    let everyTweet = tweetBank.list();
    console.log('everyTweet', everyTweet)
    res.render( 'index', { tweets: everyTweet } );
  });


router.get('/stylesheets/style.css', function (req, res) {
    console.log("inside the style sheet");
    res.sendFile('/', function (err) {
        err ? console.error(err) : console.log('processed')
    });
});

router.get('/users/:name', function(req, res){
  var name = tweetBank.find({name: req.params.name});
  res.render('index', {title: 'Twitter.js', tweets: name});
  // console.log('hey look down there!')
  // console.log('hey look here~!!', req.params.name)
})

router.get('/tweets/:id', function(req, res){
  var singleTweet = tweetBank.find({id: req.params.id});
  console.log(singleTweet, "check it out");
  res.render('index', {title: 'Twitter.js', tweets: singleTweet});
})



nunjucks.configure('views', {
    noCache: true
});
nunjucks.render('index.html', function (err, output) {});



app.use('/', router);
app.listen(port, () => console.log('server is listening!'));
module.exports = router;
