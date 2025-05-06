import React, { useState } from 'react';
import { checkBoxData } from '../utils/helper';

const CreateCheckBox = ({ data, checked, setChecked }) => {
  
  const onChangehandler = (isChecked, node) => {
    setChecked((prev) => {
      const newState = {...prev, [node.id]: isChecked}

      const updateChildren = (node) => {
        node.children && node.children.forEach(child => {
            newState[child.id] = isChecked;
            child.children && updateChildren(child);
        });
      };

      updateChildren(node);

      return newState;
    })
  }

  console.log(checked);

  return (
    <div>
      {data.map((node) =>
        <div className='form-group checkbox_container' key={node?.id}>
          <input type='checkbox' checked={checked[node.id] || false} onChange={e => onChangehandler(e.target.checked, node)} />
          <label>{node?.name}</label>

          {node?.children && 
          (<CreateCheckBox data={node?.children} checked={checked} setChecked={setChecked} />)}
        </div>
      )}
    </div>
  )
}

const NestedCheckboxes = () => {
  const [checked, setChecked] = useState({});
  return (
    <div className='container'>
      <div className='module-head'>
        <h2 className='module-title'>Nested Checkboxes - Machine Coding Interview </h2>
      </div>
      <div className='checkboxes'>
        <CreateCheckBox data={checkBoxData} checked={checked} setChecked={setChecked} />
      </div>
    </div>
  )
}

export default NestedCheckboxes
