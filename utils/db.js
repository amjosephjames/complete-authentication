const mongoose = require("mongoose");
// const url = "mongodb://localhost/authdb";

const lifeURI =
  "mongodb+srv://joseph4231:Barca4231@cluster0.zrkxc.mongodb.net/completeAuthDb?retryWrites=true&w=majority";



const connectDB = async () => {
  try {
    const conn = await mongoose.connect(lifeURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(` connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
