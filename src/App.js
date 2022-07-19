import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import UserList from './components/UserList';

import './styles/global.css';



const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/junior-front-end-developers" element={<UserList />} />
            </Route>        
        </Routes>  
    </BrowserRouter>
    
  )
}

export default App