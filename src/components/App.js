import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Product from './Product';
import imageSneaker from '../images/air_jordan_white.png';
import imageTee from '../images/t_shirt_1.png';
import imageJean from '../images/levi_jeans.png';
import '../styles/App.css';

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'White Air Jordans',
        price: 2500.00.toFixed(2),
        image: imageSneaker,
      },
      {
        id: 2,
        name: 'Original Archival Tee',
        price: 500.00.toFixed(2),
        image: imageTee,
      },
      {
        id: 3,
        name: 'Levis Jeans',
        price: 850.00.toFixed(2),
        image: imageJean,
      },
    ],
    loggedIn: true,
  };

render() {
  return (
    <div className='App'>
    {/* Header component with props */}
      <Header loggedIn={this.state.loggedIn} />
      {/* LandingPage component */}
      <LandingPage />
      {/* Product components mapped from products array in state */}
      <div className='products'>
        {this.state.products.map(product => (
          <Product 
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
}


export default App;