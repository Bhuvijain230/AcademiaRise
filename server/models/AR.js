const mongoose = require ('mongoose')
const bcrypt = require("bcrypt");
const ARSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
});
ARSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});


const ARModel = mongoose.model("AR", ARSchema);
module.exports = ARModel;