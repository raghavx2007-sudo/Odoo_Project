import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function EditTrip() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    api.get(`/trips/${id}`).then(res => {
      setName(res.data.name);
      setBudget(res.data.budget);
    });
  }, [id]);

  const handleUpdate = async () => {
    await api.put(`/trips/${id}`, { name, budget });
    alert("Trip updated");
    navigate("/my-trips");
  };

  return (
    <div className="page">
      <h2>Edit Trip</h2>

      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={budget} onChange={e => setBudget(e.target.value)} />

      <button onClick={handleUpdate}>Save</button>
    </div>
  );
}

export default EditTrip;
