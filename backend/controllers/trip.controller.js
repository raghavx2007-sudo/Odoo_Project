import Trip from "../models/Trip.js";

// CREATE trip
export const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (error) {
    res.status(500).json({ message: "Error creating trip" });
  }
};

// GET all trips
export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trips" });
  }
};

// GET single trip (View)
export const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ message: "Trip not found" });
    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: "Error fetching trip" });
  }
};

// UPDATE trip (Edit)
export const updateTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(trip);
  } catch (err) {
    res.status(500).json({ message: "Error updating trip" });
  }
};

// DELETE trip
export const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting trip" });
  }
};
