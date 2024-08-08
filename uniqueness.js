require("./connection");

const User = require("./models/User");

async function createUsers() {
  const userOne = new User({
    userName: "dona",
    password: "12345",
  });

  await userOne.save();

  const userTwo = new User({
    userName: "cameron",
    password: "securepassword",
  });

  await userTwo.save();
}

createUsers();
