import { useNavigate } from "react-router-dom";
import api from "../api/api";

function TripCard({ trip, refreshTrips }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Delete this trip?")) return;

    try {
      await api.delete(`/trips/${trip._id}`);
      alert("Trip deleted");
      refreshTrips(); 
    } catch (error) {
      alert(`Delete failed ${error}`);
    }
  };

  return (
    <div className="trip-card">
      <h3>{trip.name}</h3>
      <p>{trip.startDate?.slice(0,10)} → {trip.endDate?.slice(0,10)}</p>
      <p>Budget: ₹{trip.budget || 0}</p>

      <div className="trip-actions">
        <button onClick={() => navigate(`/trip/${trip._id}`)}>
          View
        </button>

        <button onClick={() => navigate(`/edit-trip/${trip._id}`)}>
          Edit
        </button>

        <button className="danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TripCard;
