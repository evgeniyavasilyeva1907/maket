import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Label from '../../../Common/Label/Label';
import SelectComp from '../../../Common/SelectComp/SelectComp'

const useStyles = makeStyles((theme) => ({
    select: {
        width: '198px',
    },
    infoWithSelect: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '340px',
        margin: ' auto',
        alignItems: 'center',
        paddingTop: '10px',
        borderTop: '1px solid #E7EAEE',
        marginBottom: '10px'
    }
}))

function SelectPart(props) {
    const { options, text } = props;
    const classes = useStyles()
    return (
        <div className={classes.infoWithSelect}>
            <Label text={text} />
            <SelectComp options={options} className={classes.select} />
        </div>
    )
}

export default SelectPart