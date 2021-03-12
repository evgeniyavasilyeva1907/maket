import React from 'react';
import style from './Right.module.css';
import emblem from '../../img/Emblem.png';
import SimpleTabs from '../Right part/TabPanel/SimpleTabs'

const Right = () => {
    return (
        <div dir='rtl' className={style.content}>
            <div className={style.infoLabel}>
                <div><img src={emblem} alt="embleme"></img></div>
                <div className={style.infoText}>
                    <div className={style.boldText}>לארשי תרטשמ</div>
                    <div className={style.text}>רלוג תילא גניסיפידא ררוטקסנוק ,טמא טיס <br/> רולוד םוספיא םרול</div>
                </div>
            </div>
            <SimpleTabs/>
        </div>
    )
}

export default Right