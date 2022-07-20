import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import JuniorFrontEndList from './components/FrontEndList/JuniorFrontEndList';
import SeniorFrontEndList from './components/FrontEndList/SeniorFrontEndList';
import JuniorBackEndList from './components/BackEndList/JuniorBackEndList';
import SeniorBackEndList from './components/BackEndList/SeniorBackEndList';
import SearchDeveloper from './components/SearchDeveloper';
import './styles/global.css';



const App = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/junior-front-end-developers" element={<JuniorFrontEndList />} />
                <Route path="/senior-front-end-developers" element={<SeniorFrontEndList />} />
                <Route path="/junior-back-end-developers" element={<JuniorBackEndList />} />
                <Route path="/senior-back-end-developers" element={<SeniorBackEndList />} />
                <Route path="/search-developer" element={<SearchDeveloper />} />
            </Route>        
        </Routes>  
    </BrowserRouter>
    
  )
}

export default App