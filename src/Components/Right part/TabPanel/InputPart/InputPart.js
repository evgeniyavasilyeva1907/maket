import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Label from '../../../Common/Label/Label';
import InputComp from '../../../Common/InputComp/InputComp'

const useStyles = makeStyles((theme) => ({
    input: {
        width: '198px',
    },
    infoWithInput: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '340px',
        margin: ' auto',
        alignItems: 'center',
        paddingTop: '10px',
        borderTop: '1px solid #E7EAEE',
        marginBottom: '10px'
    },
    label: {
        position:'relative',
        paddingRight: ({ indicator }) => indicator ? '20px' : '0',
        '&::before': {
            content: "''",
            border: '1px solid #F89C13',
            borderRadius: '50%',
            backgroundColor: '#F89C13',
            display: ({ indicator }) => indicator ? 'inline - block' : 'none',
            width: ' 10px',
            height: ' 10px',
            marginLeft: '10px',
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)'
        }
    }
}))

function InputPart(props) {
    const { text, value, indicator } = props;
    const classes = useStyles({ indicator })
    return (
        <div className={classes.infoWithInput}>
            <Label text={text} className={classes.label}/>
            <InputComp value={value} className={classes.input} />
        </div>
    )
}
export default InputPart