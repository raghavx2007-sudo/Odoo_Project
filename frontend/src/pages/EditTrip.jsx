import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [stops, setStops] = useState([]);

  // 🔹 Load existing trip
  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await api.get(`/trips/${id}`);
        const trip = res.data;

        setName(trip.name);
        setStartDate(trip.startDate?.slice(0, 10));
        setEndDate(trip.endDate?.slice(0, 10));
        setBudget(trip.budget);
        setStops(trip.itinerary || []);
      } catch (error) {
        alert(`Failed to load trip ${error} `);
      }
    };

    fetchTrip();
  }, [id]);

  // 🔹 Update stop
  const updateStop = (index, field, value) => {
    const updatedStops = [...stops];
    updatedStops[index][field] = value;
    setStops(updatedStops);
  };

  // 🔹 Add new stop
  const addStop = () => {
    setStops([...stops, { city: "", from: "", to: "" }]);
  };

  // 🔹 Save changes
  const handleUpdateTrip = async () => {
    try {
      await api.put(`/trips/${id}`, {
        name,
        startDate,
        endDate,
        budget,
        itinerary: stops
      });

      alert("Trip updated successfully");
      navigate("/my-trips");
    } catch (error) {
      alert("Update failed");
      console.error(error);
    }
  };

  return (
    <div className="page fade-in">
      <h2>Edit Trip</h2>

      {/* Basic info */}
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

      <button className="primary" onClick={handleUpdateTrip}>
        Save Changes
      </button>
    </div>
  );
}

export default EditTrip;
