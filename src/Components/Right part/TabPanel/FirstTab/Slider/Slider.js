import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import plan from '../../../../../img/plan.png';
import style from './Slider.module.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className={style.slider}>
                <Slider {...settings}>
                    <div>
                        <img src={plan} alt='first' />
                    </div>
                    <div>
                        <img src={plan} alt='second'/>
                    </div>
                    <div>
                        <img src={plan} alt='third' />
                    </div>
                    <div>
                        <img src={plan} alt='forth'/>
                    </div>
                </Slider>
            </div>
        );
    }
}