import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import HomeIcon from '@mui/icons-material/Home';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box dir = "rtl" >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<ShoppingCartIcon/>} {...a11yProps(0)} />
          <Tab icon={<HomeIcon/>} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <br/>
    </Box>
  );
}