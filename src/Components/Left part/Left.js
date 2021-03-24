import React from 'react';
import MainAccordion from './MainAccordion/MainAccordion'
import { makeStyles } from '@material-ui/core/styles';
import Heading from './Heading/Heading'

const useStyles = makeStyles({
    root: {
      width: '1010px',
    }

  });

const Left = () => {
  const classes = useStyles();

    return (
        <div dir='rtl' className={classes.root}>
            <Heading/>
            <MainAccordion heading='עמדה מס` 1 -  כללי למפקד תחנה' subtitle='L201 - רס"ן עם דיונים'/>
        </div>
    )
}

export default Left