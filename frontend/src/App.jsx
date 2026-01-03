import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import ItineraryBuilder from "./pages/ItineraryBuilder";
import Budget from "./pages/Budget";
import Navbar from "./components/Navbar";
import ViewTrip from "./pages/ViewTrip";
import EditTrip from "./pages/EditTrip";

import "./index.css"; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/trip/:id" element={<ViewTrip />} />
        <Route path="/edit-trip/:id" element={<EditTrip />} />
        <Route path="/itinerary" element={<ItineraryBuilder />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
