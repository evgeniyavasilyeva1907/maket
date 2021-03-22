import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Label from '../../../Common/Label/Label';

const useStyles = makeStyles((theme) => ({
    style: {
        width: '340px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '29px',
        marginBottom: '15px'
    },
    label: {
        width: '57px',
        textAlign: 'center'
    },
    number: {
        marginTop: '12px',
        textAlign: 'center',
        fontFamily: "'Arimo', sans-serif",
        fontSize: '14px',
        color: '#1F2022'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderLeft: ' 1px solid #E7EAEE',
        width: '25%'
    },
    lastContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '25%'
    }
}))

function FirstInfo() {
    const classes = useStyles()
    return (
        <div className={classes.style}>
            <div className={classes.content}>
                <Label text='במ"ר (נטו) גודל החדר' className={classes.label} />
                <div className={classes.number}>9</div>
            </div>
            <div className={classes.content}>
                <Label text='אורך החדר (מינימום)' className={classes.label} />
                <div className={classes.number}>3.5</div>
            </div>
            <div className={classes.content}>
                <Label text=' רוחב החדר (מינימום)' className={classes.label} />
                <div className={classes.number}>3.5</div>
            </div>
            <div className={classes.lastContent}>
                <Label text='גובה החדר (מינימום)' className={classes.label} />
                <div className={classes.number}>2.8</div>
            </div>
        </div>
    )

}
export default FirstInfo