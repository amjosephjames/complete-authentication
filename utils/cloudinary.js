const cloudinary = require("cloudinary");
// require("dotenv").config();
cloudinary.config({
  cloud_name: "dbknzmvbp",
  api_key: "159844567759941",
  api_secret: "LQPB0gtkwP8E1VIyMrs2Y5xZBJc",
  secure: true,
});
module.exports = cloudinary;
