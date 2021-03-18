import React from 'react';
import style from './InputComp.module.css'

function InputComp(props) {
    const {mainLabel, value}=props
    return (
        <div className={style.inputStyle}>
            <div className={style.text}>{mainLabel}</div>
            <div> <input defaultValue={value}></input></div>
        </div>
    )
}

export default InputComp;