import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LandingPage.css';
import jean_1 from '../images/Jean_1.jpeg';
import plain_t from '../images/t_shirt_1.png';
import sneakers from '../images/sneakers_js.png';

function LandingPage() {
    return (
        <div className='Landing-page'>
            {/* Title */}
            <h2>Welcome to GRAYHAIR Clothing</h2>
            {/* Description */}
            <p>We are a fashion-forward company that specializes in high quality clothing.</p>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={jean_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={plain_t}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sneakers}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default LandingPage;