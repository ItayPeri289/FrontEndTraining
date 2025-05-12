import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
import AllCards from '../AllCards';

export default function LinearIndeterminate() {
    const [loading, setLoading] = useState(false);

    React.useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
      }, []);

  return (
    <Box sx={{ width: '100%' }}>
        {loading && <LinearProgress/>}
        {!loading && <AllCards/>}
      {<LinearProgress />}
    </Box>
  );
}