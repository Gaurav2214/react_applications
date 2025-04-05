import React, { useEffect, useState } from 'react';
import { autoSearchData } from '../utils/helper';

const AutoSearch = () => {

  const [query, setQuery] = useState("");
  const [result, setResult] = useState(autoSearchData);

  const handleSearch = (e) => {
    setQuery(e.currentTarget.value);
    if(e.currentTarget.value !== ''){
      e.currentTarget.classList.add('valid');
    } else {
      e.currentTarget.classList.remove('valid');
    }
  }
  const autoSearchItem = () => {
    const filterList = autoSearchData.filter((item) => item?.title?.toLowerCase().includes(query?.toLowerCase()));
    setResult(filterList);
  }

  useEffect(() => {
    autoSearchItem();
  },[query]);

  return (
    <div className='container'>
      <div className='module-head'>
        <h2 className='module-title'>Auto Search - Machine Coding Interview </h2>
      </div>
      <div className='form-group'>
        <input type='text' 
          className='input_txt_box'
          onChange={handleSearch}
          value={query}
        />
        <label>Search Text</label>
      </div>
      <ul className='lists'>
        {result.map((item, index) => 
          <li key={item?.number}>{item?.title}</li>
        )}
      </ul>
    </div>
  )
}

export default AutoSearch;
