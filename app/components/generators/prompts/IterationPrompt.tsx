import { Box, Button, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import TimeProgressTracker from '../TimeProgressTracker.tsx/TimeProgressTracker';
import { ReactNode } from "react";

interface IterationPromptProps {
    title: string;
    buttonLabel: string;
    prompt: string;
    setPrompt: (value: string) => void;
    processFunction: () => void;
    promptProcessing: boolean;
    iterationMessage: ReactNode;
}

export function IterationPrompt({
    prompt,
    setPrompt,
    buttonLabel,
    processFunction,
    promptProcessing,
    iterationMessage
}: IterationPromptProps) {
    return (
      <Box>
        {/* <TextField label="Iteration Prompt" defaultValue={prompt} fullWidth multiline onChange={(e) => {setPrompt(e.target.value)}}/> */}
          <Button
            sx={{marginTop:1, marginBottom:1}}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={processFunction}
            disabled={promptProcessing}>
              {buttonLabel}
              </Button>
              {promptProcessing ? <TimeProgressTracker expectedMiliseconds={25000} /> : null}
              {iterationMessage != "" && <Typography variant="h5" sx={{marginTop:1, marginBottom:1}}>
              </Typography>}
              {iterationMessage != "" && <Typography variant="body1" sx={{marginTop:1, marginBottom:1}}>
                {iterationMessage}
              </Typography>}
      </Box>
    )
}