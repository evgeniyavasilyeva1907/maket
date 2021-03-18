import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InternalAccordion from '../InternalAccordion/InternalAccordion'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontFamily: '"Arimo", sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    color:'#54585E'
  },
  subtitle:{
    fontFamily: '"Arimo", sans-serif',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#1F2022',
    position: 'relative',
    "&::after":{
        content: "''",
        border: '1px solid #F89C13',
        borderRadius: '50%',
        backgroundColor: '#F89C13',
        display: 'inline-block',
        width: '10px',
        height: '10px',
        marginRight: '5px',
        position: 'absolute',
        top:'10%'
    }
  }
}));

export default function SimpleAccordion(props) {
  const {heading, subtitle} = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.heading}>{heading}</div>
          <div className={classes.subtitle}>{subtitle}</div>
        </AccordionSummary>
        <AccordionDetails>
          <InternalAccordion/>
        </AccordionDetails>
      </Accordion>
 
     
    </div>
  );
}
