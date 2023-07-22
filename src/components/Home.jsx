import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Table from './Table'

function CustomTabPanel(props) {
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
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box display='flex' alignItems='center' sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button variant='contained' color='secondary' endIcon={<KeyboardArrowDownIcon />} sx={{ mr: 3 }}>
                    All Categories
                </Button>
                <Button variant='contained' color='secondary' endIcon={<KeyboardArrowDownIcon />} sx={{ mr: 3 }}>
                    Tags
                </Button>
                <Tabs value={value} sx={{height: '5rem'}} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Latest" {...a11yProps(0)} />
                    <Tab label="Unread" {...a11yProps(1)} />
                    <Tab label="Rising" {...a11yProps(2)} />
                    <Tab label="Most Liked" {...a11yProps(3)} />
                    <Tab label="Follow Feed" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <Table />
        </>
    )
}