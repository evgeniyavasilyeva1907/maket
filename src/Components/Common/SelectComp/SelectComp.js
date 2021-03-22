import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    select: {
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

function SelectComp(props) {
    const classes = useStyles()
    const { options, className } = props;
    return (
            <select className={[classes.select,className].join(' ')} >
                {options.map((option, index) => {
                    return (
                        <option defaultValue={option.label} key={index}>{option.text}</option>
                    )
                })}
            </select>
    )
}
export default SelectComp