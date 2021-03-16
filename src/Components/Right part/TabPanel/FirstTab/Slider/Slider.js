import React from 'react';
import Slider from 'infinite-react-carousel';
import plan from '../../../../../img/plan.png'

function SimpleSlider()  {
    
    return (
        <Slider dots centerMode={true} centerPadding={10}>
            <div>
                <img src={plan}></img>
                
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Slider>
    )

};

export default SimpleSlider