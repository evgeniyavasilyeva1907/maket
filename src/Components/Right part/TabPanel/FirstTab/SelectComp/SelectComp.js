import React from 'react';
import style from '../SelectComp/Select.module.css'

function SelectComp (props) {
  const   {mainLabel, firstText, secondText, thirdText} = props;
 return(
    <div className={style.Selectstyle}>
    <div className={style.text}> {mainLabel}</div>
    <div>
        <select defaultValue={firstText}>
            <option defaultValue='first'> {firstText}</option>
            <option defaultValue='second'>{secondText}</option>
            <option defaultValue='third'> {thirdText}</option>
        </select></div>
</div>
 )
}
export default SelectComp