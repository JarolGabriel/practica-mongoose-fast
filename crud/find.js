require("../connection");

const Product = require("../models/Product");

async function main() {
  const product = await Product.find({ name: "keyboard" });
  console.log(product);
}

main();
