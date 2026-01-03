function ItineraryBuilder() {
    return (
      <div className="page fade-in">
        <h2>Itinerary Builder</h2>
  
        <button>Add City</button>
  
        <div className="itinerary-block">
          <h3>Paris (Day 1–3)</h3>
          <ul>
            <li>Eiffel Tower – ₹2000</li>
            <li>Louvre Museum – ₹1500</li>
          </ul>
          <button>Add Activity</button>
        </div>
      </div>
    );
  }
  
  export default ItineraryBuilder;
  