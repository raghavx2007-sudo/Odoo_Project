import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  stopId: { type: mongoose.Schema.Types.ObjectId, ref: "Stop" },
  name: String,
  cost: Number,
  time: String
});

export default mongoose.model("Activity", activitySchema);
