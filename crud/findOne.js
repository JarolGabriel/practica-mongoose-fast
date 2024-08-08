require("../connection");

const User = require("../models/User");

async function getUser() {
  const user = await User.findOne({ userName: "joe" });
  console.log(user);
}

getUser();
