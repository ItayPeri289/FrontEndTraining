import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import HomeIcon from '@mui/icons-material/Home';

export default function NavigationBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'right'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<ShoppingCartIcon />} />
      </BottomNavigation>
    </Box>
  );
}
