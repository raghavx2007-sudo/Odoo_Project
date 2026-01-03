import { useEffect, useRef, useState } from "react";
import api from "../api/api";
import TripCard from "../components/TripCard";

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const fetchedRef = useRef(false);

  const fetchTrips = async () => {
    const res = await api.get("/trips");
    setTrips(res.data);
  };

  useEffect(() => {
    if (fetchedRef.current) return; // 👈 prevents second call
    fetchedRef.current = true;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTrips();
  }, []);

  return (
    <div className="page">
      <h2>My Trips</h2>
      {trips.map(trip => (
        <TripCard key={trip._id} trip={trip} refreshTrips={fetchTrips} />
      ))}
    </div>
  );
}

export default MyTrips;
