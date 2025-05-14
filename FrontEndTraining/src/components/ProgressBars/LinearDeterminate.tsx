import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface loadingProgressBar {
  itemsAmount: number,
  setOpenAlertDialog: (status: boolean) => void;
}

export default function LinearDeterminate(props: loadingProgressBar) {
  const [progress, setProgress] = React.useState(0); // import usestate

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 100 / props.itemsAmount;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      props.setOpenAlertDialog(true);
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
<LinearProgress variant="determinate" value={progress} sx={{ height: 10 }} />
    </Box>
  );
}
