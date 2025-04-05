import React from 'react';
import logo from "../logo.svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='container header__inner'>
        <div className='logo'>
          <Link to={'/'}>
            <img src={logo} alt='Logo' width={100} height={60} />
          </Link>
        </div>
        <h1>React Applications</h1>
      </div>
    </div>
  )
}

export default Header;

