import { Accordion, AccordionDetails, AccordionSummary, Button, Divider, TextField, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import { Save } from '@mui/icons-material';
import TimeProgressTracker from '../TimeProgressTracker.tsx/TimeProgressTracker';
import CharacteristicGrid from "../../CharacteristicGrid";
import { PrimaryCategoryData } from "../GeneratorForm";
import { GridValidRowModel } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";

interface PromptAccordionProps {
    title: string;
    prompt: string;
    setPrompt: (value: string) => void;
    processFunction: () => void;
    promptProcessing: boolean;
    promptCharacteristics: PrimaryCategoryData[];
    promptCharacteristicRows: GridValidRowModel[];
    setPromptCharacteristicRows: Dispatch<SetStateAction<GridValidRowModel[]>>
    setResult: () => void;
    iterationPrompt?: string;
    processIterationFunction?: () => void;
    iterationMessage?: string;
    isDefaultExpanded?: boolean;
}

export function PromptAccordion({
    title,
    prompt,
    setPrompt,
    processFunction,
    promptProcessing,
    promptCharacteristics,
    promptCharacteristicRows,
    setPromptCharacteristicRows,
    setResult,
    iterationPrompt,
    processIterationFunction,
    iterationMessage,
    isDefaultExpanded = false
}: PromptAccordionProps) {
    return (
        <Accordion defaultExpanded={isDefaultExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            {title}
        </AccordionSummary>
          <AccordionDetails>
            {iterationPrompt && <TextField label="Iteration Prompt" defaultValue={iterationPrompt} fullWidth multiline onChange={(e) => {setPrompt(e.target.value)}}/>}
            <Button
                  sx={{marginTop:1, marginBottom:1}}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={processIterationFunction}>
                    Request Feedback To Widen Scope
              </Button>
              {iterationMessage && <Typography variant="h5" sx={{marginTop:1, marginBottom:1}}>
                Iteration Feedback:
                {iterationMessage}
              </Typography>}
              <Typography variant="body1" sx={{marginTop:1, marginBottom:1}}>
                {iterationMessage}
              </Typography>
              {iterationMessage && <Divider sx={{marginTop:3, marginBottom:3}}/>}
              {iterationMessage && <Button
                  sx={{marginTop:1, marginBottom:1}}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={processFunction}>
                    Action Feedback To Widen Scope
              </Button>}
              {promptProcessing ? <TimeProgressTracker expectedMiliseconds={25000} /> : null}
              {iterationMessage && <Typography variant="h5" sx={{marginTop:1, marginBottom:1}}>
                New Result:
                {iterationMessage}
              </Typography>}

            {iterationMessage && <CharacteristicGrid primaryCategoryData={promptCharacteristics} rows={promptCharacteristicRows} setRows={setPromptCharacteristicRows}/>}
            {iterationMessage && <Button
                sx={{marginTop:1, marginBottom:1}}
                variant="contained"
                endIcon={<Save />}
                onClick={setResult}>
                  Overwrite Result
            </Button>}
        </AccordionDetails>
      </Accordion>
    )
}