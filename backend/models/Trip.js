import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    budget: Number,
    citiesCount: Number
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);
