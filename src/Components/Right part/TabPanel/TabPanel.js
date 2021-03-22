import React from 'react';
import PropTypes from 'prop-types';

function TabPanel(props) {
    const { children, value, index, paddingBottom, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div style={{ backgroundColor: '#fff', borderRadius: '0 0 5px 5px', paddingBottom:`${paddingBottom}px` }}>
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

export default TabPanel;