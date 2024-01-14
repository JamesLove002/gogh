import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface TimeProgressTrackerProps {
    expectedMiliseconds: number
}

export default function TimeProgressTracker({expectedMiliseconds}: TimeProgressTrackerProps) {
  const [progress, setProgress] = React.useState(0);

  const progressPer200mili = 100/(expectedMiliseconds/200)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        return oldProgress+progressPer200mili;
            });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%'}}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}