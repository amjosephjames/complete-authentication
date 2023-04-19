const mongoose = require("mongoose")
const verifyModel = new mongoose.Schema(
  {
    token: {
      type: String,
    },
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("verifies", verifyModel);