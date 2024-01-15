import { Box, Button, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Save } from '@mui/icons-material';
import TimeProgressTracker from '../TimeProgressTracker.tsx/TimeProgressTracker';
import CharacteristicGrid from "../../CharacteristicGrid";
import { PrimaryCategoryData } from "../GeneratorForm";
import { GridValidRowModel } from "@mui/x-data-grid";
import { Dispatch, SetStateAction } from "react";

interface DataResponsePromptProps {
    prompt: string;
    setPrompt: (value: string) => void;
    processFunction: () => void;
    promptProcessing: boolean;
    promptCharacteristics: PrimaryCategoryData[];
    promptCharacteristicRows: GridValidRowModel[];
    setPromptCharacteristicRows: Dispatch<SetStateAction<GridValidRowModel[]>>
    setResult: () => void;
}

export function DataResponsePrompt({
    prompt,
    setPrompt,
    processFunction,
    promptProcessing,
    promptCharacteristics,
    promptCharacteristicRows,
    setPromptCharacteristicRows,
    setResult,
}: DataResponsePromptProps) {
    return (
        <Box>
            <TextField label="Iteration Prompt" defaultValue={prompt} fullWidth multiline onChange={(e) => {setPrompt(e.target.value)}}/>
            <Button
                  sx={{marginTop:1, marginBottom:1}}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={processFunction}
                  disabled={promptProcessing}>
                    Run
              </Button>
              {promptProcessing && <TimeProgressTracker expectedMiliseconds={25000} />}

            <CharacteristicGrid primaryCategoryData={promptCharacteristics} rows={promptCharacteristicRows} setRows={setPromptCharacteristicRows}/>
            <Button
                sx={{marginTop:1, marginBottom:1}}
                variant="contained"
                endIcon={<Save />}
                onClick={setResult}>
                  Overwrite Result
            </Button>
        </Box>
    )
}