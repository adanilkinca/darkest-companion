import React from 'react';
import Capitalize from '../components/capitalize';

export function TorchRadioGroup({ selectedValue, onChange, name, options = [] }) {
  console.log("💡 TorchRadioGroup received options:", options);

  if (!options || options.length === 0) {
    console.error("🚨 TorchRadioGroup received empty options! Check Redux state.");
    return <p>No options available</p>;
  }

  return (
    <div className="torch-radio-group">
      {options.map(option => (
        <label className='torch-radio' key={option} htmlFor={option}>
          <input 
            type="radio" 
            id={option} 
            name={name} 
            value={option} 
            checked={selectedValue === option} 
            onChange={() => onChange(option)}
          />
          <i className='torch-radio-icon' />
          <div className='torch-radio-label'>
            <Capitalize text={option} />
          </div>
        </label>
      ))}
    </div>
  );
}
