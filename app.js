var express = require('express');
var nunjucks = require('nunjucks');
var app = express();
var port = process.env.PORT || 3000;

var router = express.Router();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


var locals = {
  title: 'An example',
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo'},
    { name: 'Hermoine'}
  ]
};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});



router.get('/',  (req, res) => res.send('hello from inside the get!'))

app.use('/', router);
//app.listen(port);
app.listen(port, () => console.log('server is listening!'));



// // ROUTES
// // ==============================================

// // sample route with a route the way we're used to seeing it
// router.get('/sample', function(req, res) {
//     res.send('this is a sample!');
// });

// // we'll create our routes here

// // START THE SERVER
// // ==============================================
// app.use('/', router);

// app.listen(port);
// console.log('Magic happens on port ' + port);
