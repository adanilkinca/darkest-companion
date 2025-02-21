import React from 'react';
import { connect } from 'react-redux';
import { getSelectedLocation } from '../ducks/mission';
import { getCuriosForLocation } from '../data/curios';

function LocationCurios({ selectedLocation }) {
  console.log("📍 Selected Location in LocationCurios:", selectedLocation);

  const curios = getCuriosForLocation(selectedLocation);
  console.log("🔍 Curios for selected location:", curios);

  if (!curios || curios.length === 0) {
    return <p>No curios available for this location.</p>;
  }

  return (
    <div className='curios-list'>
      {curios.map((curio, index) => (
        <div className='curio' key={index}>
          <div className='curio-cell curio-description'>
            <div className='curio-name'>{curio.name}</div>
            {curio.icon && <img className='curio-icon' src={curio.icon} alt={curio.name} />}
          </div>
          <div className='curio-options'>
            {curio.options.map((option, optIndex) => (
              <div className="curio-cell curio-option" key={optIndex}>
                <div className="curio-cell-container">
                  <div className="curio-cell-item">
                    <img className="curio-activator" src={option.activator.icon} alt={option.activator.label} />
                  </div>
                  <div className="curio-cell-item">
                    {option.outcomes.map((outcome, outIndex) => (
                      <div className='curio-outcome' key={outIndex}>
                        {outcome.chances !== 100 && <span className='curio-outcome-chances'>{outcome.chances}%</span>}
                        <span className='curio-outcome-label'>{outcome.type.label}</span>
                        {outcome.amount && <span className='curio-outcome-amount'> x{outcome.amount}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Connects selectedLocation from Redux state
export default connect(state => ({
  selectedLocation: getSelectedLocation(state).selectedLocation,
}))(LocationCurios);
