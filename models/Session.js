const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema({
  start: Date,
  end: Date,
  booked_by: { type: Schema.Types.ObjectId, ref: "User" },
  spot: { type: Schema.Types.ObjectId, ref: "User" },
}); 

mongoose.model("Session", sessionSchema);