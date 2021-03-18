import React from 'react';
import style from './Left.module.css';
import MainAccordion from './MainAccordion/MainAccordion'

const Left = () => {
    return (
        <div dir='rtl' className={style.content}>
            <MainAccordion heading='עמדה מס` 1 -  כללי למפקד תחנה' subtitle='L201 - רס"ן עם דיונים'/>
        </div>
    )
}

export default Left