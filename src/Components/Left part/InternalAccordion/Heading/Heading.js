import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MenuButton from '../MenuButton/MenuButton';
import Checkbox from '../CheckBox/CheckBox'

const useStyles = makeStyles({
    heading: {
        display: 'flex',
        flexDirection: 'row',
        fontFamily: "'Arimo', sans-serif",
        fontSize: '14px',
        color: '#54585E',
        minWidth: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: '26px',
        height: '26px',
        backgroundColor: 'transparent',
        borderRadius: '3px',
        border: '1px solid #E7EAEE',
        color: '#2F4971',
        cursor: 'pointer',
        outline: 'none'
    },
    counter: {
        width: '90px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: ({visibleButtons}) => visibleButtons ? 'space-between' : 'center',
        alignItems: 'center'
    },
    number: {
        position: 'relative',
        '&::after': {
            content: "''",
            border: '1px solid #F89C13',
            borderRadius: '50%',
            backgroundColor: '#F89C13',
            display: ({ indicator }) => indicator ? 'inline - block' : 'none',
            width: ' 10px',
            height: ' 10px',
            marginRight: '10px',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)'
        }
    },
    lastPart: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '60px',
        justifyContent: 'space-between'
    }

});

function Heading(props) {
    const { number, indicator, text, size, desc, visibleButtons } = props
    const classes = useStyles({ indicator, visibleButtons });
    const [count, setCount] = useState(2);
    return (
        <div className={classes.heading}>
            <div className={classes.number}>{number}</div>
            <div>{text} </div>
            <div className={classes.counter}>
                {visibleButtons && (<button className={classes.button} onClick={() => setCount(count + 1)}><AddIcon /></button>)}
                <div dir='ltr'>{count}</div>
                {visibleButtons && (<button className={classes.button} onClick={() => setCount(count - 1)}><RemoveIcon /></button>)}
            </div>
            <div> {size} </div>
            <div> {desc}  </div>
            <div className={classes.lastPart}>
                <Checkbox />
                <MenuButton />
            </div>
        </div>
    )
}
export default Heading;