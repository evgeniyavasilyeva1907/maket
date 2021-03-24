import TabPanel from '../../../Right part/TabPanel/TabPanel'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoContent from '../InfoContent/InfoContent'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        borderRight: '1px solid #E7EAEE',
        borderLeft: '1px solid #E7EAEE',
        borderBottom: '1px solid #E7EAEE',
        borderRadius: '5px',
    },
    elevation4: {
        boxShadow: 'none'
    },
    button: {
        width: '138px',
        borderTop: '1px solid #E7EAEE',
        borderRight: '1px solid #E7EAEE',
        borderLeft: '1px solid #E7EAEE',
        height: '47px',
        lineHeight: '15px'
    },
    firstButton:{
        width: '138px',
        borderTop: '1px solid #E7EAEE',
        borderLeft: '1px solid #E7EAEE',
        height: '47px',
        lineHeight: '15px'
    },
    lastButton:{
        width: '138px',
        borderTop: '1px solid #E7EAEE',
        borderRight: '1px solid #E7EAEE',
        height: '47px',
        lineHeight: '15px'
    }
}));

export default function TabPanelInfo() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>

            <AppBar position="static" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{ style: { background: "none" } }}>
                    <Tab label="יללכ"   {...a11yProps(0)} className={classes.firstButton} />
                    <Tab label='למשח' {...a11yProps(1)} className={classes.button} />
                    <Tab label='למשח' {...a11yProps(2)} className={classes.button} />
                    <Tab label='ריווא גוזימ' {...a11yProps(3)} className={classes.button} />
                    <Tab label='ירוביחו היצלטסניא תרנצ ' {...a11yProps(4)} className={classes.button} />
                    <Tab label=' םייללכ םינותנ' {...a11yProps(5)} className={classes.button} />
                    <Tab label='הנוכמ ףדל הבחרה' {...a11yProps(6)} className={classes.lastButton} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <InfoContent/>
            </TabPanel>
            <TabPanel value={value} index={1} >
                Item Two
            </TabPanel>
        </div>
    );
}