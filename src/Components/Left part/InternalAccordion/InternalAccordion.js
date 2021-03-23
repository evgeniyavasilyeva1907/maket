import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TabPanelInfo from '../TabPanelInfo/TabPanelInfo'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    backgroundColor: '#fff',
    minHeight: '40px',
    height: '40px',
    borderRadius: '5px'
  },
  desc: {
    padding: '0 20px',
    backgroundColor: '#fff',
    borderRadius: '5px'
  }
});

export default function ActionsInAccordionSummary() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false)
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
            onClick: ()=> {
              setExpanded(!expanded)
            }
          }}
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox style={{ backgroundColor: 'red' }} />}
          // label="I acknowledge that I should stop the click event propagation"
          />
          <div>Heading</div>
        </AccordionSummary>
        <AccordionDetails className={classes.desc}>
          <TabPanelInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
          className={classes.content}
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the focus event propagation"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The focus event of the nested action will propagate up and also focus the accordion
            unless you explicitly stop it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
          className={classes.content}
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should provide an aria-label on each action that I add"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            If you forget to put an aria-label on the nested action, the label of the action will
            also be included in the label of the parent button that controls the accordion
            expansion.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
