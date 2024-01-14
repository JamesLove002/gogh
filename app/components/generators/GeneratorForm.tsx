"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box, Divider, TextField, Typography } from '@mui/material';
import { RunPrompt, p1GetPrimaryCategories } from '@/services/gpt/gpt';
import CharacteristicGrid from '../CharacteristicGrid';
import SendIcon from '@mui/icons-material/Send';
import {
    randomTraderName,
  } from '@mui/x-data-grid-generator';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';
import { Field, Formik } from 'formik';
import {
  randomId,
} from '@mui/x-data-grid-generator';
import {
  GridValidRowModel,
} from '@mui/x-data-grid';


export type PrimaryCategoryData = {
    primaryCategory: string;
    primaryCategoryDescriptor: string;
};

const examplePrimaryCategoryData: PrimaryCategoryData[] = [
    {
        primaryCategory: randomTraderName(),
        primaryCategoryDescriptor: "text",
    },
    {
        primaryCategory: randomTraderName(),
        primaryCategoryDescriptor: "Text2",
    },
    {
        primaryCategory: randomTraderName(),
        primaryCategoryDescriptor: "lel",
    },
    {
        primaryCategory: randomTraderName(),
        primaryCategoryDescriptor: "Example3",
    },
    {
        primaryCategory: randomTraderName(),
        primaryCategoryDescriptor: "Example 4",
    },
];

interface GeneratorFormProps {
  characteristic?: string;
}

function GeneratorForm({ characteristic }: GeneratorFormProps) {

    const [openAI, setOpenAI] = useState(new OpenAI({
        apiKey: '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',
        dangerouslyAllowBrowser: true
    }));

  const [assistant, setAssistant] = useState<OpenAI.Beta.Assistants.Assistant>();
  const [thread, setThread] = useState<OpenAI.Beta.Threads.Thread>();
  const [prompt1Characteristics, setPrompt1Characteristics] = useState<PrimaryCategoryData[]>(examplePrimaryCategoryData);
  const [rows, setRows] = React.useState(getRowsFromCategoryData(examplePrimaryCategoryData));
  
  function getRowsFromCategoryData(primaryCategoryData: PrimaryCategoryData[]) {
    var initialRows: GridValidRowModel[] = primaryCategoryData.map((primaryCategoryData) => {
      return {
        id: randomId(),
        primaryCategory: primaryCategoryData.primaryCategory,
        primaryCategoryDescriptor: primaryCategoryData.primaryCategoryDescriptor,
      };  
      })
  
    return initialRows;
  }

  async function handleSendClick(prompt: string, openAI: OpenAI, assistant?: OpenAI.Beta.Assistants.Assistant, thread?: OpenAI.Beta.Threads.Thread) {
    if (assistant === undefined || thread === undefined) {
        console.log("assistant or thread undefined");
    } else {
        console.log(prompt);
        let result = await RunPrompt(openAI, assistant, thread, prompt);
        const jsonArray = findJsonArray(result);
        console.log(jsonArray); // Outputs: [1, 2, 3]
        setRows(getRowsFromCategoryData(jsonArray));
    }
    }

    useEffect(() => {
        console.log("Setting up connection")
        setupGPTConnection();
      }, [])
    
    async function setupGPTConnection() {
    
    const initialAssistant = await openAI.beta.assistants.create({
        name: `${characteristic} generator`,
        instructions: `Your expertise spans from the ancient era through to the Renaissance, aiding in creating a comprehensive dataset for randomly generating characters for fantasy stories set in these historical periods. Your role encompasses providing authentic details on culture, occupations, societal norms, and regional variations across these eras. You avoid eurocentric bias, and encompass ideas from different cultures such as chinese, japanese, egyptian, persian, middle eastern, african, south american, aztec, american indian, indiginious, korean aswell as european cultural contexts. Offer in-depth historical context to ensure characters align with their respective settings, whether in ancient Rome, Egypt, Greece, Persia, medieval Europe, or the Renaissance. Handle requests for specific regions, time periods, or social classes to enhance the richness and diversity of the characters. Engage users with informative and captivating historical insights, and ask clarifying questions if details are vague. 
    
        The primary task you're engaged in is generating a rich and detailed set of 1000-5000 character ${characteristic} categorized with primary, secondary and tertiary categories. 
        - Generate 10-40 Primary Categories
        - Generate 15-50 Secondary Categories per Primary Category
        - Generate 5-25 Tertiary Categories per Secondary Category
        
        This dataset must be rich, diverse and comprehensive, with each element being unique. Any conceivable characteristic should be categorisable under one or more primary and secondary categories.
        
        Tailor your responses to demonstrate a profound understanding of these historical eras, in a diverse array of cultures, time periods and historical or fictional contexts.
    `,
        model: "gpt-4-1106-preview"
        });
    setAssistant(initialAssistant);
    
    const initialThread = await openAI.beta.threads.create();
    setThread(initialThread);
    }

  return (
    <Formik
    initialValues={{
      prompt1: p1GetPrimaryCategories
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
                  onClick={() => handleSendClick(values.prompt1, openAI, assistant, thread)}>
                    Send
              </Button>
            <CharacteristicGrid primaryCategoryData={prompt1Characteristics} rows={rows} setRows={setRows}/>
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