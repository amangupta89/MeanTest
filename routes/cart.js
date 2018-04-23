var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cart = require('../models/Cart.js');

/* GET ALL Cart */
router.get('/', function (req, res, next) {
    // console.log(Cart);
    // red.send(Cart);
    Cart.find(function (err, products) {
        console.log('products');
        if (err) return next(err);
        console.log(products);
        console.log('products');
        res.json(products);
    });
});

/* GET SINGLE Cart BY ID */
// router.get('/:id', function (req, res, next) {
//     Cart.findById(req.params.id, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* SAVE Cart */
router.post('/', function (req, res, next) {
    // console.log(req.body);
    // res.send(req.body);
    // return;
    Cart.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Cart */
// router.put('/:id', function (req, res, next) {
//     Cart.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

/* DELETE Cart */
// router.delete('/:id', function (req, res, next) {
//     Cart.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

module.exports = router;