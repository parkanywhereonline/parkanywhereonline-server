const mongoose = require("mongoose");
const { Schema } = mongoose;

const spotSchema = new Schema({
  name: String,
  address: String,
  lat: Number,
  lon: Number,
  sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
  owner: { type: Schema.Types.ObjectId, ref: "User" },
}); 

mongoose.model("Spot", spotSchema);