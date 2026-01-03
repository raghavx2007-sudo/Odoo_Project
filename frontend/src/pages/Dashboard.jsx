import { useEffect, useState } from "react";
import api from "../api/api";
import TripCard from "../components/TripCard";

function Dashboard() {
  const [currentTrips, setCurrentTrips] = useState([]);
  const [pastTrips, setPastTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const res = await api.get("/trips");
      const trips = res.data;
      const today = new Date();

      setCurrentTrips(trips.filter(t => new Date(t.endDate) >= today));
      setPastTrips(trips.filter(t => new Date(t.endDate) < today));
    };

    fetchTrips();
  }, []);

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <h3>🟢 Current Trips</h3>
      <div className="trip-grid">
        {currentTrips.length === 0
          ? <p>No ongoing trips</p>
          : currentTrips.map(trip => (
              <TripCard key={trip._id} trip={trip} />
            ))}
      </div>

      <h3>📦 Previous Trips</h3>
      <div className="trip-grid">
        {pastTrips.length === 0
          ? <p>No previous trips</p>
          : pastTrips.map(trip => (
              <TripCard key={trip._id} trip={trip} />
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
