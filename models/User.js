const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  email: String,
  fname: String,
  lname: String,
  slots: [{ type: ObjectId, ref: "Slot" }],
  sessions: [{ type: ObjectId, ref: "Session" }],
}); 

mongoose.model("User", userSchema);