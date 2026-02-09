const Schema = require("mongoose").Schema;

const OrdersSchema= new Schema({
     name: String,
    price: Number,
    percent: Number,
    isDown: Boolean,
});

module.exports= {OrdersSchema};