"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { AppBar, Box, Card, CardContent, CardHeader, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';
import { RunPrompt, getAssistant, getPrompt1Default, getPrompt1InitialPrimaryCategories, getThread } from '@/services/gpt/gpt';
import CharacteristicGrid, { getRowsFromCategoryData } from '../CharacteristicGrid';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { Formik } from 'formik';
import {
  GridValidRowModel,
} from '@mui/x-data-grid';
import TimeProgressTracker from './TimeProgressTracker.tsx/TimeProgressTracker';
import { Save } from '@mui/icons-material';

export type PrimaryCategoryData = {
    primaryCategory: string;
    primaryCategoryDescriptor: string;
};

const examplePrimaryCategoryData: PrimaryCategoryData[] = [
    {
        primaryCategory: "Category",
        primaryCategoryDescriptor: "DescriptorDescriptorDescriptorDescriptorDescriptorDescriptorDescriptor",
    }
];

function GeneratorForm() {
  //Open AI setup
  const [openAI, setOpenAI] = useState(new OpenAI({
      apiKey: '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',
      dangerouslyAllowBrowser: true
  }));
  const [assistant, setAssistant] = useState<OpenAI.Beta.Assistants.Assistant>();
  const [thread, setThread] = useState<OpenAI.Beta.Threads.Thread>();

  useEffect(() => {
    console.log("Setting up connection")
    setupGPTConnection();
  }, [])

  async function setupGPTConnection() {
    setAssistant(await getAssistant(openAI, characteristic));
    setThread(await getThread(openAI));
  }

  //Setup Form State
  const [characteristic, setCharacteristic] = useState("Ideal");

  //Result
  const [resultCharacteristics, setResultCharacteristics] = useState<PrimaryCategoryData[]>(examplePrimaryCategoryData);
  const [resultCharacteristicRows, setResultCharacteristicRows] = React.useState(getRowsFromCategoryData(examplePrimaryCategoryData));

  //Prompt 1
  const [prompt1, setPrompt1] = useState<string>(getPrompt1Default(characteristic))
  const [prompt1Characteristics, setPrompt1Characteristics] = useState<PrimaryCategoryData[]>(examplePrimaryCategoryData);
  const [prompt1CharacteristicRows, setPrompt1CharacteristicRows] = React.useState(getRowsFromCategoryData(examplePrimaryCategoryData));
  const [prompt1Processing, setPrompt1Processing] = useState(false);

  //Functions
  async function submitToGPT(prompt: string, processingStateSetter: React.Dispatch<React.SetStateAction<boolean>>, setPromptCharacteristics: React.Dispatch<React.SetStateAction<PrimaryCategoryData[]>>, setPromptCharacteristicRows: React.Dispatch<React.SetStateAction<GridValidRowModel[]>>) {
    processingStateSetter(true)
    if (assistant === undefined || thread === undefined) {
        console.error("assistant or thread undefined");
    } else {
        console.log(prompt);
        let result = await RunPrompt(openAI, assistant, thread, prompt);
        const jsonArray = findJsonArray(result);
        console.log(jsonArray);
        setPromptCharacteristicRows(getRowsFromCategoryData(jsonArray));
    }
    
    processingStateSetter(false)
    }

  return (
  <Grid container spacing={2} sx={{ margin: 1, height: "99vh"}}>
        <Grid item xs={6} sx={{height: "100%"}}>
          <Card sx={{height: "100%"}}>
            <CardHeader title={`Process - ${characteristic} Generator`}/>
            <CardContent>
            <Formik
    initialValues={{
      prompt1: getPrompt1Default(characteristic),
    }}
    onSubmit={(values) => console.log("Submitting!" + values) /*Not yet implemented*/}
    >
    {({ values }) => (
        <>
          <Box sx={{ my: 2 }}>
        <TextField label="Characteristic" defaultValue={characteristic} fullWidth onChange={(e) => {setCharacteristic(e.target.value)}}/>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {`Step 1 - Generate Starting ${characteristic} Primary Categories`}
        </AccordionSummary>
          <AccordionDetails>
          <TextField label="Prompt" defaultValue={prompt1} fullWidth multiline onChange={(e) => {setPrompt1(e.target.value)}}/>
              <Button
                  sx={{marginTop:1, marginBottom:1}}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => submitToGPT(getPrompt1InitialPrimaryCategories(prompt1, characteristic), setPrompt1Processing, setPrompt1Characteristics, setPrompt1CharacteristicRows)}>
                    Run
              </Button>
              {prompt1Processing ? <TimeProgressTracker expectedMiliseconds={20000} /> : null}
            <CharacteristicGrid primaryCategoryData={prompt1Characteristics} rows={prompt1CharacteristicRows} setRows={setPrompt1CharacteristicRows}/>
            <Button
                  sx={{marginTop:1, marginBottom:1}}
                  variant="contained"
                  endIcon={<Save />}
                  onClick={() => {
                    setResultCharacteristics(prompt1Characteristics)
                    setResultCharacteristicRows(prompt1CharacteristicRows)
                  }}>
                    Overwrite Result
              </Button>
        </AccordionDetails>
      </Accordion>
          </Box>
          </>
    )}
    </Formik>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card >
            <CardHeader title={`Result - Character ${characteristic} Primary Categories`}/>
            <CardContent>
              <CharacteristicGrid primaryCategoryData={resultCharacteristics} rows={resultCharacteristicRows} setRows={setResultCharacteristicRows}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  );
}

export default GeneratorForm;

function findJsonArray(str: string) {
    const start = str.indexOf('[');
    const end = str.lastIndexOf(']');
  
    if (start === -1 || end === -1 || start >= end) {
      return null; // No JSON array found
    }
  
    const jsonArrayStr = str.slice(start, end + 1);
  
    try {
      const jsonArray = JSON.parse(jsonArrayStr);
      return jsonArray;
    } catch (error) {
      console.error('Failed to parse JSON array:', error);
      return null;
    }
  }