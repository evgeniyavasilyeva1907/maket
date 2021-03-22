import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily:"'Arimo', sans-serif",
        fontSize: '12px',
        color: '#54585E',
    }
}))

function Label(props) {
    const { text, className } = props;
    const classes = useStyles()
    return (
        <div className={[classes.text, className].join(' ')}>{text}</div>
    )
}
export default Label