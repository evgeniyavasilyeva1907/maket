import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import CheckIcon from '@material-ui/icons/Check';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    iconChecked: {
        width: '32px',
        height: '32px',
        border: '1px solid #E7EAEE',
        borderRadius: '5px',
        color: '#2F4971'
    },
    iconUnchecked:{
        width: '32px',
        height: '32px',
        border: '1px solid #E7EAEE',
        borderRadius: '5px',
        color: '#FFF'
    }

}));

function CheckBoxComp() {
    const classes = useStyles();
    return (
        <Checkbox style={{ fontSize: 32 }}
            checkedIcon={<CheckIcon classes={{ root: classes.iconChecked }} />}
            icon={<CheckIcon classes={{ root: classes.iconUnchecked }} />} />
    )
}

export default CheckBoxComp