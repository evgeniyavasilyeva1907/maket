import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FirstTab from './FirstTab/FirstTab';
import PowerOutlinedIcon from '@material-ui/icons/PowerOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div style={{ backgroundColor: '#fff', paddingBottom: '15px' }}>
                    {children}
                </div>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#DEE4EB',
    },
    elevation4: {
        boxShadow: 'none'
    }
}));

/*const StyledAppBar = withStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    }

})(AppBar)*/

/*const StyledTab = withStyles({
    selected: {
        backgroundColor: "#fff"
    },
    root: {
        width: '183px',
        borderRadius: '5px 5px  0 0',
        
    }
})(Tab)*/

/*const StyledTabs = withStyles({
    root: {
        backgroundColor: '#DEE4EB',
    },
    flexContainer: {
        justifyContent: "space-between"
    }
})(Tabs)*/


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
                    <Tab label="רדחה ינותנ" icon={<LayersOutlinedIcon/>}  {...a11yProps(0)} />
                    <Tab label="תורעהו םינקת" icon={<PowerOutlinedIcon />}{...a11yProps(1)} />
                </Tabs>
            </AppBar>


            <TabPanel value={value} index={0}>
                <FirstTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
    );
}