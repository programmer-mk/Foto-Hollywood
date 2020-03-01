import React, { Component } from 'react';
//import { InfoConsumer } from '../context';
import picture_slide_show1 from '../../carousel-pictures/carousel-picture-1.jpg';
import picture_slide_show2 from '../../carousel-pictures/carousel-picture-2.jpg';
import picture_slide_show3 from '../../carousel-pictures/carousel-picture-4.jpg';


class Carousel extends Component {
    render() {
        return (
        
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style={{height: '35rem'}}>
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={picture_slide_show1} style={{height: '35rem'}} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Foto Hollywood</h5>
                  <p>Enjoy every precious moment.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={picture_slide_show2} style={{height: '35rem'}}  class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Foto Hollywood</h5>
                  <p>Pure and honest love.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src={picture_slide_show3} style={{height: '35rem'}} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Foto Hollywood</h5>
                  <p>The photos were pure magic. They are a work of art.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        );
    }
}

export default Carousel;
