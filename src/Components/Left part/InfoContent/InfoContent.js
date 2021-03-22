import React from 'react';
import Slider from '../../Common/Slider/Slider';
import { makeStyles } from '@material-ui/core/styles';
import item from '../../../img/item.png';
import style from './InfoContent.module.css';
import SelectComp from '../../Common/SelectComp/SelectComp'

const useStyles = makeStyles((theme) => ({
    slider: {
        width: '223px',
        height: '423px',
        border: '1px solid #E7EAEE',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRadius: '5px',
        padding: '0 10px'
    },
    check:{
        color: 'red'
    }
}))

function InfoContent() {
    const classes = useStyles()
    return (
        <div className={style.content}>
            <div >
                <SelectComp mainLabel='תגית ראשית' firstText='חשמל' />
                hello
            </div>
            <div className={classes.slider}>
                <Slider image1={item} image2={item} image3={item} image4={item} />
            </div>
            
        </div>

    )
}
export default InfoContent