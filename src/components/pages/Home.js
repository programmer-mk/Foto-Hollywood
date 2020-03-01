import React, { Component } from 'react';
import Carousel from '../home/Carousel';
import Portfolios from '../home/Portfolios';
import AboutUs from '../home/AboutUs';
import Team from '../home/Team';
import OrderPhotos from '../home/OrderPhotos';
import Location from '../home/Location';
//import { InfoConsumer } from '../context';


class Home extends Component {
    render() {
        return (
            <div>
              <Carousel />
              <Portfolios />
              <AboutUs />
              <Team />
              <OrderPhotos />
              <Location />
            </div>
          
        );
    }
}

export default Home;
