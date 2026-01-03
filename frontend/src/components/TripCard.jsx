import { useNavigate } from "react-router-dom";
import api from "../api/api";

function TripCard({ trip }) {
  const navigate = useNavigate();

  const deleteTrip = async () => {
    if (!window.confirm("Delete trip?")) return;
    await api.delete(`/trips/${trip._id}`);
    window.location.reload();
  };

  return (
    <div className="trip-card">
      <h4>{trip.name}</h4>
      <p>{trip.startDate?.slice(0,10)} → {trip.endDate?.slice(0,10)}</p>
      <p>Budget: ₹{trip.budget}</p>

      {/* progress bar */}
      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <div className="trip-actions">
        <button onClick={() => navigate(`/trip/${trip._id}`)}>View</button>
        <button onClick={() => navigate(`/edit-trip/${trip._id}`)}>Edit</button>
        <button className="danger" onClick={deleteTrip}>Delete</button>
      </div>
    </div>
  );
}

export default TripCard;
