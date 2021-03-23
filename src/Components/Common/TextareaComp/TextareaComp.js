import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textarea: {
        resize:' none',
        color: '#1F2022',
        fontFamily:"'Arimo', sans-serif",
        border:' 1px solid #E7EAEE',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
        outline: 'none',
        overflow:' hidden'
    }
}))

function TextareaComp(props){
    const classes = useStyles()
    const {text, className} = props
    return(
            <textarea  defaultValue={text} className={[classes.textarea,className].join(' ')}></textarea>
    )
}

export default TextareaComp