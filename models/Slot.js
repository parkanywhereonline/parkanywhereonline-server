const mongoose = require("mongoose");
const { Schema } = mongoose;

const slotSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  lon: Number,
  session: [{ type: Schema.Types.ObjectId, ref: "Session" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
}); 

mongoose.model("Slot", slotSchema);