var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
    type: String,
    title: String,
    author: String,
    description: String,
    firstname: String,
    lastname: String,
    price: Number,
    item:[
        {
            price:Number,
            description: String
        }
    ],
    amount: Number
});

module.exports = mongoose.model('Cart', CartSchema);