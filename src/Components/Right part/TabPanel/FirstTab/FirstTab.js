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
                <div className={style.text}> רדחה חתפמ</div>
                <div> <input defaultValue='םינויד םע ן"סר - L201'></input></div>
            </div>
            <div className={style.thirdInfo}>
                <div className={style.text}> רדחה חתפמ</div>
                <div>
                    <select defaultValue='םינויד םע ן"סר - L201'>
                        <option defaultValue='first'> דרשמ</option>
                        <option defaultValue='second'> דרשמ</option>
                        <option defaultValue='third'> דרשמ</option>
                    </select></div>
            </div>

        </div>
    )
}

export default FirstTab
