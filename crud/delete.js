require("../connection");

const Product = require("../models/Product");

const someFunction = async () => {
  //const result = await Product.deleteMany({ name: "keyboard" });
  //const result = await Product.deleteOne({ name: "laptop hp" });
  //const result = await Product.findOneAndDelete({ name: "laptop" });
  const result = await Product.findByIdAndDelete("66b412707cf3ef19026fa1fb");
  console.log(result);
};

someFunction();
