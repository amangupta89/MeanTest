var mongoose = require('mongoose');

var CartSchema = new mongoose.Schema({
    type: String,
    title: String,
    description: String,
    firstname: String,
    lastname: String,
    price: Number,
    tax: Number,
    items:[
        {
            price:Number,
            description: String,
            tax: Number,
            picture: String
        }
    ],
    orderFactor: Number
});


module.exports = mongoose.model('Cart', CartSchema);