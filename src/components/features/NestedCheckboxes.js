import React from 'react';
import { checkBoxData } from '../utils/helper';

const CreateCheckBox = ({data}) => {
  console.log(data);
  return (
    <div className=''>
      {data.map((node) => 
        <div className='form-group' key={node?.id}>
          <input type='checkbox' />
          <label>{node?.name}</label>
        </div>
      )}
    </div>
  )
}

const NestedCheckboxes = () => {
  return (
    <div className='container'>
      <div className='module-head'>
        <h2 className='module-title'>Nested Checkboxes - Machine Coding Interview </h2>
      </div>
      <div className='checkboxes'>
        <CreateCheckBox data={checkBoxData} />
      </div>
    </div>
  )
}

export default NestedCheckboxes
