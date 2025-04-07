import React from 'react';
import { checkBoxData } from '../utils/helper';

const CreateCheckBox = ({data}) => {
  //console.log(data);
  return (
    <div className=''>
      {data.map((node) => 
        <>
          <div className='form-group checkbox_container' key={node?.id}>
            <div className='checkbox_container__inner'>
              <input type='checkbox' />
              <label>{node?.name}</label>
            </div>
            {node?.children && <CreateCheckBox data={node?.children} />}
          </div>
        </>
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
