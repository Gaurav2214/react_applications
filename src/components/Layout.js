import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AutoSearch from './features/AutoSearch';
import ValidateOTP from './features/ValidateOTP';
import NestedCheckboxes from './features/NestedCheckboxes';

const Layout = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auto-search' element={<AutoSearch />} />
            <Route exact path='/validate-otp' element={<ValidateOTP />} />
            <Route exact path='/checkboxes' element={<NestedCheckboxes />} />
        </Routes>
    </React.Fragment>
  )
}

export default Layout
