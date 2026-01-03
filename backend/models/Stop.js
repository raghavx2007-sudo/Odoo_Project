import mongoose from "mongoose";

const stopSchema = new mongoose.Schema({
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip" },
  city: String,
  arrivalDate: Date,
  departureDate: Date
});

export default mongoose.model("Stop", stopSchema);
