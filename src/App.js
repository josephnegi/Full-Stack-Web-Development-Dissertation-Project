import React from 'react';
import './styles/app.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

import Header from './sections/Header.js';
import Home from './views/Home.js';
import CategoryPage from './views/CategoryPage.js';
import LogIn from './views/LogIn.js';
import SignOut from './views/SignOut.js'
import ImageViewer from './views/ImageViewer.js';
import Profile from './views/Profile.js';

export default function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Business" element={<CategoryPage/>} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Signout" element={<SignOut />} />
          <Route path={"/images/:id"} element={<ImageViewer />} />
          <Route path={"/users/:id"} element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
