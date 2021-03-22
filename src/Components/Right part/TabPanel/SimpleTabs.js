import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FirstTab from './FirstTab/FirstTab';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import TabPanel from './TabPanel'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    elevation4: {
        boxShadow: 'none'
    }
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>

            <AppBar position="static" elevation={0}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{ style: { background: "none" } }}>
                    <Tab label="רדחה ינותנ" icon={<LayersOutlinedIcon />}  {...a11yProps(0)} />
                    <Tab label="תורעהו םינקת" icon={<PowerOutlinedIcon />} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} paddingBottom={5}>
                <FirstTab />
            </TabPanel>
            <TabPanel value={value} index={1} paddingBottom={5}>
                Item Two
            </TabPanel>
        </div>
    );
}