import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import BlogOnline from './online/BlogOnline';
import BlogOnlineDetail from './online/BlogOnlineDetail';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App my-10 mx-20">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="online" element={<BlogOnline />} />
        <Route path="online/:id" element={<BlogOnlineDetail />} />
      </Routes>
    </div>
  );
}

export default App;
