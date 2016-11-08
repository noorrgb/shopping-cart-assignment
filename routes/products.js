var express = require('express');
var router = express.Router();

var faker = require('faker');


var PRODUCT_COUNT = 10;
let products = [];
for (var i = 0; i < PRODUCT_COUNT; i++) {
    products.push({

        id: faker.random.uuid(),

        name: faker.commerce.productName(), price: faker.commerce.price(),

        image: faker.image.image(), description: faker.lorem.sentence()

    });
}



router.get('/api/products', function(req, res) {
    res.json(products);
});



module.exports = router;