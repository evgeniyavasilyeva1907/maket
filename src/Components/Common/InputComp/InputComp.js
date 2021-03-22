import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    input: {
        border: '1px solid #E7EAEE',
        height: '32px',
        borderRadius: '5px',
        color: '#1F2022',
        fontFamily: '"Arimo", sans-serif',
        fontSize: '14px',
        outline: 'none',
        paddingRight: '10px'
    }
}))

function InputComp(props) {
    const classes = useStyles()
    const { value, className } = props
    return (
        
            <input className={[classes.input,className].join(' ')} defaultValue={value}></input>
        
    )
}

export default InputComp;