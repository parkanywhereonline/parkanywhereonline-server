const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  fname: String,
  lname: String,
  password: String,
  spots: [{ type: Schema.Types.ObjectId, ref: "Spot" }],
  sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
}); 

mongoose.model("User", userSchema);