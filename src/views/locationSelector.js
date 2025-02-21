import React from 'react';
import { connect } from 'react-redux';
import { TorchRadioGroup } from '../components/torchRadioGroup';
import { selectLocation, getSelectedLocation, getLocations } from '../ducks/mission';

export function LocationSelector({ selectedLocation, locations = [], selectLocation }) {
  console.log("🔥 Redux Props in LocationSelector:");
  console.log("🗺️ Selected Location:", selectedLocation);
  console.log("📍 Available Locations:", locations);

  if (!locations || locations.length === 0) {
    console.error("🚨 No locations received in component! Check Redux state.");
    return <p>Loading locations...</p>;
  }

  return (
    <section className="location-selector centered">
      <h1>Location</h1>
      <TorchRadioGroup 
        options={locations} 
        selectedValue={selectedLocation} 
        onChange={selectLocation} 
        name='location'
      />
    </section>
  );
}

// ✅ Ensure correct Redux state mapping
export default connect(state => {
  console.log("🔄 Redux State in LocationSelector:", state);  // ✅ Debug Redux state
  return {
    selectedLocation: getSelectedLocation(state)?.selectedLocation || 'ruins',
    locations: getLocations(state) || [],  // ✅ Ensures locations is always an array
  };
}, { selectLocation })(LocationSelector);
