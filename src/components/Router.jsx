import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';

const Router = () => (
  <div>
    <BrowserRouter>
      <Navbar />
      <Sidebar />
    </BrowserRouter>
  </div>
);

export default Router;
