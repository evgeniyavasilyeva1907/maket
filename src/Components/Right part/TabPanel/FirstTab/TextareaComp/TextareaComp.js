import React from 'react';
import style from './TextareaComp.module.css'

function TextareaComp(props){
    const {text} = props
    return(
        <div>
            <textarea className={style} defaultValue={text} ></textarea>
        </div>
    )
}

export default TextareaComp