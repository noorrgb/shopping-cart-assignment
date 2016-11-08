var express = require('express');
var app = express();
var index = require('./routes/index');

var productsRoutes = require('./routes/products');
var cartProductsRoutes = require('./routes/cartProducts');

var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/test');

app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));

app.use(function(req,res,next){
	req.db = db;
	next();
});


app.use('/', index);
app.use('/', productsRoutes);
app.use('/', cartProductsRoutes);




app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});
