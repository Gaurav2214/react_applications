import React from 'react';
import { features } from './utils/helper';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='container homepage'>
      <div className='module-head'>
        <h2 className='module-title'>Machine Coding Interview using React </h2>
      </div>
        <ul className='lists'>
          {features.map((item, index) => 
            <li key={'features_'+index}>
              <Link to={item?.routename}>{item?.name}</Link>
            </li>
          )}
        </ul>
    </div>
  )
}

export default Home;
