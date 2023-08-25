const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// This will be the table name //
module.exports = mongoose.model("Product1", ProductSchema);
