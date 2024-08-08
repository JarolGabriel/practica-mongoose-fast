require("../connection");

const User = require("../models/User");

// async function updateUser() {
//   const user = await User.findOne({ userName: "fast" });
//   console.log(user);
//   user.password = "minuevacontrasena";

//   user.save();
// }

const otherFunction = async () => {
  const user = await User.findOneAndUpdate(
    { userName: "clark" },
    { name: "gordon Clark" },
    { new: true }
  );

  console.log(user);
};

otherFunction();
