import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Product from './Shopping';
import UserProfile from './UserProfile';
import imageSneaker from '../images/air_jordan_white.png';
import imageTee from '../images/t_shirt_1.png';
import imageJean from '../images/levi_jeans.png';
import '../styles/App.css';
import NavigationMenu from './NavigationMenu';

function App() {
  return (
    <Router>
      {/* Display header component on every page */}
      <Header loggedIn={true} />

      {/* Display navigation menu component on every page */}
      <NavigationMenu />

      <Routes>
        {/* Only display the landing component on the home page */}
        <Route path="/" element={<LandingPage />} />

        {/* User profile component */}
        <Route path='/profile' element={<UserProfile />} />

        {/* Display at least 3 product components when the "Shopping" menu item is selected */}
        <Route path="/shopping" element={
        <div className="products">
            <Product name='White Air Jordans' image={imageSneaker} price='2500.00' />
            <Product name='Original Archival Tee' image={imageTee} price='500.00' />
            <Product name='Levis Jeans' image={imageJean} price='850.00' />
        </div>} />
      </Routes>
    </Router>
  );
}



export default App;