var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var router = express.Router();

// router.use('/', (err, req, next) => {

//         console.log('this ahppens everywhere');
//     next();
    
// })


router.get('/',  (req, res) => res.send('hello from inside the get!'))
router.get('/news', (req, res) => res.send('check out my latest news'));



app.use('/', router);
//app.listen(port);
app.listen(port, () => console.log('server is listening!'));





// var express = require('express');
// var app     = express();
// var port    =   process.env.PORT || 3000;

// var router = express.Router();

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
