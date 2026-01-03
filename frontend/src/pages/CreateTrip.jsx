import { useState } from "react";
import api from "../api/api";

function CreateTrip() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleCreate = async () => {
    try {
      await api.post("/trips", {
        name,
        startDate,
        endDate,
        cityCount: 0,
        budget: 0
      });

      alert("Trip created successfully");
    } catch (error) {
      alert(`Error creating trip ${error} `);
    }
  };

  return (
    <div className="page">
      <h2>Create Trip</h2>

      <input
        placeholder="Trip Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input type="date" onChange={e => setStartDate(e.target.value)} />
      <input type="date" onChange={e => setEndDate(e.target.value)} />

      <button onClick={handleCreate}>Save Trip</button>
    </div>
  );
}

export default CreateTrip;
