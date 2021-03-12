import React from 'react';
import style from './FirstTab.module.css';

const FirstTab = () => {
    return (
        <div>
            <div className={style.firstInfo}>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה לדוג<br />ר"מב (וטנ)</div>
                    <div className={style.number}>9</div>
                </div>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה ךרוא<br />(םומינימ)</div>
                    <div className={style.number}>3.5</div>
                </div>
                <div className={style.textNumber}>
                    <div className={style.text}> רדחה בחור<br />(םומינימ)</div>
                    <div className={style.number}>3.5</div>
                </div>
                <div className={style.textNumberLast}>
                    <div className={style.text}> רדחה הבוג<br />(םומינימ)</div>
                    <div className={style.number}>2.8</div>
                </div>
            </div>
            <div className={style.secondInfo}>
                
            </div>
        </div>
 )
}

export default FirstTab
