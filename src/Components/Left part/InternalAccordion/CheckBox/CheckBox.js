import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    iconChecked: {
        width: '24px',
        height: '24px',
        color: '#B95F5F'
    },
    iconUnchecked: {
        width: '24px',
        height: '24px',
        border: 'none',
        color: '#939CAA'
    }

}));


function CheckBoxComp() {
    const classes = useStyles();
    return (
        <Checkbox style={{ fontSize: 32 }}
            checkedIcon={<AssignmentOutlinedIcon classes={{ root: classes.iconChecked }} />}
            icon={<AssignmentOutlinedIcon classes={{ root: classes.iconUnchecked }} />} />
    )
}

export default CheckBoxComp