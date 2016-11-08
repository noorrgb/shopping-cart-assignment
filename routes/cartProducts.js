var express = require('express');
var router = express.Router();


router.get('/api/cartProducts', function(req, res) {
    var db = req.db;
    var collection = db.get('cartProducts');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});


router.post('/api/cartProducts', function(req, res) {
    var db = req.db;
    var collection = db.get('cartProducts');
    console.log('enter to cart'+req.body);
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});


router.delete('/api/cartProducts/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('cartProducts');
    var userToDelete = req.params.id;
    collection.remove({ '_id' : userToDelete }, function(err) {
        res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
    });
});

module.exports = router;