import React from 'react';
import { RadioGroup, Radio } from 'react-radio-group';
import Capitalize from '../components/capitalize';

const renderOption = (option) => {
  return (
    <label className='torch-radio' key={`option-${option}`} htmlFor={option}>
      <Radio id={option} value={option} />
      <i className='torch-radio-icon' />
      <div className='torch-radio-label'>
        <Capitalize text={option} />
      </div>
    </label>
  );
};

export function TorchRadioGroup({ selectedValue, onChange, name, options }) {
  return (
    <div className="torch-radio-group">
      <RadioGroup name={name} selectedValue={selectedValue} onChange={onChange}>
        {options.map(renderOption)}
      </RadioGroup>
    </div>
  );
}
