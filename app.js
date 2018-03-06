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
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
  });


router.get('/stylesheets/style.css', function (req, res) {
    console.log("inside the style sheet");
    res.sendFile('/', function (err) {
        err ? console.error(err) : console.log('processed')
    });
});

nunjucks.configure('views', {
    noCache: true
});
nunjucks.render('index.html', function (err, output) {});



app.use('/', router);
app.listen(port, () => console.log('server is listening!'));
module.exports = router;