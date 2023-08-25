const { response } = require("express");

const MongoClient = require("mongodb").MongoClient;
const url = `mongodb+srv://sayooj0076:eabTM4tUwGZwnFn3@cluster0.7kjwjeq.mongodb.net/?retryWrites=true&w=majority`;

const addProducts = async (req, res, next) => {
  console.log("ok");
  let newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);
  try {
    // connect with db and add product //

    await client.connect();
    // Connecting to the database //
    const db = client.db("DataBaseName");
    // Creating a Table //
    const result = await db.collection("products").insertOne(newProduct);
  } catch (error) {
    console.log("Error =", error);
    return res.json({ Message: "true" });
  }
  // Close the connection //
  client.close();

  res.json({ Message: "ok" });
};

const getProducts = async (req,res,next) => {
  const client = new MongoClient(url);
  let result;
  try {
    // connect with db and add product //

    await client.connect();
    // Connecting to the database //
    const db = client.db("DataBaseName");
    // Retrive Data //
    result = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({"message":'Failed'})
  }
  client.close();
  res.json({ data: result });
};

exports.addProducts = addProducts;
exports.getProducts = getProducts;
