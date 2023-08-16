// // App.js

import React, {Component, Fragment} from 'react';
// import {Typeahead} from 'react-typeahead';
//import {FormGroup, FormControl as Control} from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Input from './pages/Input';
import Output from './pages/Output';


const App = () => {
 return (
    <>
       <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          <Route path="/output" element={<Output />} />
       </Routes>
    </>
 );
};

export default App;
