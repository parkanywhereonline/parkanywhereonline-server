const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema({
  start: Date,
  end: Date,
  booked_by: { type: ObjectId, ref: "User" },
}); 

mongoose.model("Session", sessionSchema);