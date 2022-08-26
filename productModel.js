const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
   slug: String,
   amount: Number,
   amountSell: Number,
});

const Product = new mongoose.model("Tests", ProductSchema);
module.exports = { Product };
