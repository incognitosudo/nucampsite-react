//import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import NucampLogo from './app/assets/img/logo.png';
import './App.css';
//import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
//import { CAMPSITES } from './app/shared/CAMPSITES';
import { Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';

//route path with prop of 'directory'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage />} />
        <Route 
          path='directory/campsiteId'
          element={<CampsitesDirectoryPage />}
        />
        
        {/* This Route handles any request to a path that begin with 'direcotry/' followed by any string. */}
        <Route 
          path='directory/:campsiteId'
          element={<CampsiteDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
