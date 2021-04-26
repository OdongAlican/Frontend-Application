import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Router = () => (
  <div>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  </div>
);

export default Router;
