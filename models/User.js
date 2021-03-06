const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  fname: String,
  lname: String,
  slots: [{ type: Schema.Types.ObjectId, ref: "Slot" }],
  sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
}); 

mongoose.model("User", userSchema);