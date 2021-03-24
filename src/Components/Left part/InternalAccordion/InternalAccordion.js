import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TabPanelInfo from './TabPanelInfo/TabPanelInfo';
import Heading from './Heading/Heading'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    minHeight: '40px',
    height: '40px',
    borderRadius: '5px',
    marginBottom: '5px'
  },
  desc: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '5px'
  }
});

export default function ActionsInAccordionSummary() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          className={classes.content}
          IconButtonProps={{
            onClick: () => {
              setExpanded(!expanded)
            }
          }}
        >
          <Heading number="ESB2-2-06" 
          text='שולחן דיונים ניצב' 
          size='א110 x ר110 x ג110' 
          desc='  השמה - לתכי מורגם בורק? לתיג ישבעס...' 
          indicator={true}
          visibleButtons={expanded} />
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <TabPanelInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded2}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          className={classes.content}
          IconButtonProps={{
            onClick: () => {
              setExpanded2(!expanded2)
            }
          }}
        >
          <Heading number="ESB2-2-06" indicator={true} visibleButtons={expanded2}/>
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <TabPanelInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded3}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
          className={classes.content}
          IconButtonProps={{
            onClick: () => {
              setExpanded3(!expanded3)
            }
          }}
        >
          <Heading number="ESB2-2-06"  visibleButtons={expanded3}/>
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <TabPanelInfo />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
