import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function CreateTrip() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");

  // itinerary builder
  const [stops, setStops] = useState([
    { city: "", from: "", to: "" }
  ]);

  // add new stop
  const addStop = () => {
    setStops([...stops, { city: "", from: "", to: "" }]);
  };

  // update stop
  const updateStop = (index, field, value) => {
    const updatedStops = [...stops];
    updatedStops[index][field] = value;
    setStops(updatedStops);
  };

  // submit trip
  const handleCreateTrip = async () => {
    if (!name || !startDate || !endDate || !budget) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await api.post("/trips", {
        name,
        startDate,
        endDate,
        budget,
        itinerary: stops
      });

      alert("Trip created successfully");
      navigate("/my-trips");
    } catch (error) {
      alert("Failed to create trip");
      console.error(error);
    }
  };

  return (
    <div className="page fade-in">
      <h2>Create Trip</h2>

      {/* Basic trip info */}
      <div className="form-group">
        <input
          placeholder="Trip Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />

        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Total Budget (₹)"
          value={budget}
          onChange={e => setBudget(e.target.value)}
        />
      </div>

      {/* Itinerary Builder */}
      <h3>Itinerary Builder</h3>

      {stops.map((stop, index) => (
        <div key={index} className="itinerary-card">
          <input
            placeholder="City"
            value={stop.city}
            onChange={e => updateStop(index, "city", e.target.value)}
          />

          <input
            type="date"
            value={stop.from}
            onChange={e => updateStop(index, "from", e.target.value)}
          />

          <input
            type="date"
            value={stop.to}
            onChange={e => updateStop(index, "to", e.target.value)}
          />
        </div>
      ))}

      <button onClick={addStop}>+ Add Stop</button>

      <br /><br />

      <button className="primary" onClick={handleCreateTrip}>
        Create Trip
      </button>
    </div>
  );
}

export default CreateTrip;
