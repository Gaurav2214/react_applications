import React, { useState } from 'react'

const ChipsInput = () => {
  const [keyword, setKeyword] = useState([]);
  const [inputvalue, setInputvalue] = useState('');


  const handleChange = (e) => {
    setInputvalue(e.currentTarget.value);
    if (e.currentTarget.value !== '') {
      e.currentTarget.classList.add('valid');
    } else {
      e.currentTarget.classList.remove('valid');
    }
  }

  const createTag = (e) => {
    if (e.keyCode == 13 && inputvalue.trim()) {
      if (!keyword.includes(inputvalue.trim())) {
        setKeyword(prevKey => [...prevKey, inputvalue.trim()]);
        setInputvalue('');
      }
    }
  }
  const handleRemove = (indexRemove) => {
    setKeyword(prevKey => prevKey.filter((_, index) => index !== indexRemove));
  }

  return (
    <div className='container'>
      <div className='module-head'>
        <h2 className='module-title'>Chips Input Component </h2>
      </div>
      <div className='chips-input-container'>
        <div className='form-group'>
          <input type='text'
            className='input_txt_box'
            value={inputvalue}
            onChange={handleChange}
            onKeyDown={createTag}
          />
          <label>Type a Chip and Press enter</label>
        </div>
        <div className='show-keyword'>
          <ul>
            {keyword.map((item, index) =>
              <li key={item + '_' + index}>{item} <span onClick={() => handleRemove(index)}>X</span></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChipsInput;
