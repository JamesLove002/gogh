"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box, TextField, Typography } from '@mui/material';
import { RunPrompt, getAssistant, getPrompt1InitialPrimaryCategories, getThread } from '@/services/gpt/gpt';
import CharacteristicGrid, { getRowsFromCategoryData } from '../CharacteristicGrid';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { Field, Formik } from 'formik';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import {
  GridValidRowModel,
} from '@mui/x-data-grid';
import TimeProgressTracker from './TimeProgressTracker.tsx/TimeProgressTracker';

export type PrimaryCategoryData = {
    primaryCategory: string;
    primaryCategoryDescriptor: string;
};

const examplePrimaryCategoryData: PrimaryCategoryData[] = [
    {
        primaryCategory: "Category",
        primaryCategoryDescriptor: "Descriptor",
    }
];

interface GeneratorFormProps {
  characteristic: string;
}

function GeneratorForm({ characteristic }: GeneratorFormProps) {

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
  //Prompt 1
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
    <Formik
    initialValues={{
      prompt1: getPrompt1InitialPrimaryCategories(characteristic),
    }}
    onSubmit={(values) => console.log("Submitting!" + values) /*Not yet implemented*/}
  >
    {({ values, errors, touched, setFieldValue }) => (
        <>
          <Typography variant="h3" gutterBottom>
            {characteristic} Generator - {thread?.id}
          </Typography>
          <Box sx={{ my: 2 }}>
        <TextField label="Characteristic" defaultValue={characteristic} fullWidth/>

      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Prompt 1 - Generate Starting Set
        </AccordionSummary>
          <AccordionDetails>
              <Field as={TextField} id="prompt1" name="prompt1" placeholder="prompt1"  fullWidth multiline defaultValue={values.prompt1} />
              <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={() => submitToGPT(values.prompt1, setPrompt1Processing, setPrompt1Characteristics, setPrompt1CharacteristicRows)}>
                    Send
              </Button>
              {prompt1Processing ? <TimeProgressTracker expectedMiliseconds={20000} /> : null}
            <CharacteristicGrid primaryCategoryData={prompt1Characteristics} rows={prompt1CharacteristicRows} setRows={setPrompt1CharacteristicRows}/>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Prompt 2
        </AccordionSummary>
        <AccordionDetails>
          She's a shit spy.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Prompt 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
          </Box>
          </>
    )}
    </Formik>
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