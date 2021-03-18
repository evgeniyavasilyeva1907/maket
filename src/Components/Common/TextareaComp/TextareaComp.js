import React from 'react';
import  './TextareaComp.module.css'

function TextareaComp(props){
    const {text, className} = props
    return(
            <textarea  defaultValue={text} className={className}></textarea>
    )
}

export default TextareaComp