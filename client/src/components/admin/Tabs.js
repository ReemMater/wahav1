import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InboxTab from './InboxTab'
import NewsTab from './NewsTab'
import ProfileTab from './ProfileTab'
import SubscribeTab from './SubscribeTab'

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
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
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
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Inbox" {...a11yProps(0)} />
                    <Tab label="Subscribe" {...a11yProps(1)} />
                    <Tab label="News" {...a11yProps(2)} />
                    <Tab label="Profile" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <InboxTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SubscribeTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <NewsTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ProfileTab />
            </TabPanel>
        </div>
    );
}
