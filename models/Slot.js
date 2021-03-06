const mongoose = require("mongoose");
const { Schema } = mongoose;

const slotSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  lon: Number,
  session: [{ type: ObjectId, ref: "Session" }],
  owner: { type: ObjectId, ref: "User" },
}); 

mongoose.model("Slot", slotSchema);