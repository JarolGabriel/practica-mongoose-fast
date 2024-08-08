require("./connection");

const Product = require("./models/Product");

const product = new Product({
  name: "laptop",
  description: "lenovo thinkpad x1 carbon 6th generation",
  price: 1300.99,
});

product
  .save()
  .then(() => {
    console.log("Document saved!");
  })
  .catch((err) => {
    console.error(err);
  });

console.log(product);
