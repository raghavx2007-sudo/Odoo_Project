import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

function ViewTrip() {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);

  useEffect(() => {
    api.get(`/trips/${id}`).then(res => setTrip(res.data));
  }, [id]);

  if (!trip) return <p>Loading...</p>;

  return (
    <div className="page">
      <h2>{trip.name}</h2>
      <p>{trip.startDate?.slice(0,10)} → {trip.endDate?.slice(0,10)}</p>
      <p>Budget: ₹{trip.budget}</p>
    </div>
  );
}

export default ViewTrip;
