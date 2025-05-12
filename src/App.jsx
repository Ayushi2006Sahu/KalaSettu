import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import MoreAbout from './pages/MoreAbout';
import Blog from './pages/blogs';
import Contact from './pages/Contactus';
import Concert from './pages/Concerts';
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-more' element={<MoreAbout />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/concerts' element={<Concert />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
