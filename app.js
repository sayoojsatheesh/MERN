const express = require("express");
const bodyParser = require("body-parser");
const mongoFunction = require("./mongoose");

const app = express();

app.use(bodyParser.json());
// Adding Data //
app.post("/products", mongoFunction.CreateProduct);
// Retriving Data//
app.get("/products", mongoFunction.findProduct);

app.listen(3000);
