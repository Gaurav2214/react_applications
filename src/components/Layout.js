import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AutoSearch from './features/AutoSearch';
import ValidateOTP from './features/ValidateOTP';
import NestedCheckboxes from './features/NestedCheckboxes';
import DynamicCounter from './features/DynamicCounter';
import ChipsInput from './features/ChipsInput';
import ProgessBar from './features/ProgessBar';
import FileExplorer from './features/FileExplorer';
import ToggelPassword from './features/ToggelPassword';
import JsQuestions from './features/JsQuestions';
import ZigZag from './features/ZigZag';

const Layout = () => {
  return (
    <React.Fragment>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auto-search' element={<AutoSearch />} />
            <Route exact path='/validate-otp' element={<ValidateOTP />} />
            <Route exact path='/checkboxes' element={<NestedCheckboxes />} />
            <Route exact path='/dynamic-counter' element={<DynamicCounter />} />
            <Route exact path='/chips-input' element={<ChipsInput />} />
            <Route exact path='/progress-bar' element={<ProgessBar />} />
            <Route exact path='/file-explorer' element={<FileExplorer />} />
            <Route exact path='/toggle-password' element={<ToggelPassword />} />
            <Route exact path='/zigzag-merge' element={<ZigZag />} />
            <Route exact path='/js-questions' element={<JsQuestions />} />
        </Routes>
    </React.Fragment>
  )
}

export default Layout
