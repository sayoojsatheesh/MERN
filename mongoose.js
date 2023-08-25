const mongoose = require("mongoose");
const Product = require("./models/product");

// Database name will be taken from the url//
mongoose
  .connect(
    "mongodb+srv://sayooj0076:eabTM4tUwGZwnFn3@cluster0.7kjwjeq.mongodb.net/your-database-name?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(() => {
    console.log("Connection Failed !!");
  });

const CreateProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  const result = await createdProduct.save();
  res.json(result);
};

// Returns all data in a table //
const findProduct = async (req, res, next) => {
  const result = await Product.find().exec();
  console.log("result = ", result);
  res.json(result);
};

exports.CreateProduct = CreateProduct;
exports.findProduct = findProduct;
