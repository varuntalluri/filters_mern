const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the product"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for the product"],
  },
  description: {
    type: String,
    required: [true, "Please provide description of the product"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
