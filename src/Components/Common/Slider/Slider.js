import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Slider.module.css'



export default function SimpleSlider(props) {
    const {image1, image2, image3, image4} = props
    return (
        <div className={style.slider}>
            <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                >
                <div>
                    <img src={image1} alt='first' />
                </div>
                <div>
                    <img src={image2} alt='second' />
                </div>
                <div>
                    <img src={image3} alt='third' />
                </div>
                <div>
                    <img src={image4} alt='forth' />
                </div>
            </Slider>
        </div>
    );
}
