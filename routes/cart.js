var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cart = require('../models/Cart.js');

/* GET ALL Cart */
router.get('/', function (req, res, next) {
    Cart.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

router.get('/aggregate', function (req, res, next) {
    Cart.aggregate([
        {
            $project: {
                _id: 0,
                type: 1,
                PosSentiment: {
                    $cond: { if: { $gte: [{ $sum: { $size: '$items' } }, 3] }, then: { $multiply: [{ $sum: '$items.price' }, '$orderFactor'] }, else: { $sum: '$items.price' } }
                }

            }
        },
        {
            $group: {
                _id: "$type",
                sum: { $sum: '$PosSentiment' }
            }
        }
    ], function (err, result) {
        if (err) {
            next(err);
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

/* GET SINGLE Cart BY ID */
router.get('/:id', function (req, res, next) {
    Cart.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

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