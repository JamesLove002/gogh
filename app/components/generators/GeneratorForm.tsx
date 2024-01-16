"use client";

import * as React from 'react';
import { Box, Button, Card, CardContent, CardHeader, Checkbox, Grid, List, ListItem, TextField, Typography } from '@mui/material';
import { RunPrompt, getAssistant, getPrompt1Default, getPrompt1InitialPrimaryCategories, getPrompt2OptionsNotCovered, getPrompt3Default, getPrompt3IterateBasedOnFeedback, getPrompt4RemoveDuplicationAndSubCategories, getPrompt5CanItBeImproved, getThread } from '@/services/gpt/gpt';
import CharacteristicGrid, { getRowsFromCategoryData } from '../CharacteristicGrid';
import { useEffect, useState } from 'react';
import OpenAI from 'openai';
import {
  GridValidRowModel,
} from '@mui/x-data-grid';
import { BasePromptAccordion } from './prompts/BasePromptAccordian';
import { IterationPrompt } from './prompts/IterationPrompt';
import SendIcon from '@mui/icons-material/Send';
import { DataResponsePrompt } from './prompts/DataResponsePrompt';

export type PrimaryCategoryData = {
    primaryCategory: string;
    primaryCategoryDescriptor: string;
};

const defaultPrimaryCategoryData: PrimaryCategoryData[] = [
    // {
    //     "primaryCategory": "Integrity",
    //     "primaryCategoryDescriptor": "Encompassing honor, honesty, and moral uprightness, with a steadfast adherence to a personal or communal ethical code."
    // },
    // {
    //     "primaryCategory": "Compassion",
    //     "primaryCategoryDescriptor": "Integrating empathy with acts of kindness and altruism, addressing the emotional and practical needs of others."
    // },
    // {
    //     "primaryCategory": "Serenity",
    //     "primaryCategoryDescriptor": "Capturing harmony, equilibrium, and peace, focusing on the pursuit of balance in one's inner life and external surroundings, and the reduction of strife."
    // },
    // {
    //     "primaryCategory": "Valor",
    //     "primaryCategoryDescriptor": "Exemplifying courage, bravery, and heroism in the face of adversity, to protect and advance just causes."
    // },
    // {
    //     "primaryCategory": "Wisdom",
    //     "primaryCategoryDescriptor": "Combining knowledge, experience, and deep understanding, offering sound judgment and forethought."
    // },
    // {
    //     "primaryCategory": "Loyalty",
    //     "primaryCategoryDescriptor": "Demonstrating unwavering commitment and fidelity to individuals, principles, or entities, through thick and thin."
    // },
    // {
    //     "primaryCategory": "Ingenuity",
    //     "primaryCategoryDescriptor": "Marked by inventive creativity and resourcefulness, finding novel and practical solutions to complex problems."
    // },
    // {
    //     "primaryCategory": "Leadership",
    //     "primaryCategoryDescriptor": "Guiding and inspiring others towards a common goal, exemplifying authority with responsibility and accountability."
    // },
    // {
    //     "primaryCategory": "Devotion",
    //     "primaryCategoryDescriptor": "Exhibiting steadfast affection, dedication, or zealous commitment to a cause, deity, or person."
    // },
    // {
    //     "primaryCategory": "Piety",
    //     "primaryCategoryDescriptor": "Reflecting devout religious commitment and observance, showing reverence to the divine."
    // },
    // {
    //     "primaryCategory": "Justice",
    //     "primaryCategoryDescriptor": "Upholding the principles of fairness, law, and equity, and advocating for the rights of others."
    // },
    // {
    //     "primaryCategory": "Honor",
    //     "primaryCategoryDescriptor": "Maintaining a strong sense of ethical conduct and respect, often tied to social status and reputation."
    // },
    // {
    //     "primaryCategory": "Craftsmanship",
    //     "primaryCategoryDescriptor": "Mastering skill in creating through manual arts, symbolizing quality, artistry, and tradition."
    // },
    // {
    //     "primaryCategory": "Scholarship",
    //     "primaryCategoryDescriptor": "Dedicated to learning, research, and education, valuing intellectual growth and the expansion of knowledge."
    // },
    // {
    //     "primaryCategory": "Ambition",
    //     "primaryCategoryDescriptor": "Driven by an earnest desire for achievement or distinction, often leading to success or higher social status."
    // },
    // {
    //     "primaryCategory": "Fortitude",
    //     "primaryCategoryDescriptor": "Showcasing mental and emotional strength in facing adversity, danger, or temptation with resilience."
    // },
    // {
    //     "primaryCategory": "Generosity",
    //     "primaryCategoryDescriptor": "Willingness to give or share freely, not only material possessions but also time and effort."
    // },
    // {
    //     "primaryCategory": "Curiosity",
    //     "primaryCategoryDescriptor": "Possessing a strong desire to learn or know more, often driving exploration and discovery."
    // },
    // {
    //     "primaryCategory": "Humble",
    //     "primaryCategoryDescriptor": "Showing modesty or a low estimate of one's own importance, often in terms of self-effacement or submission."
    // },
    // {
    //     "primaryCategory": "Chivalry",
    //     "primaryCategoryDescriptor": "Demonstrating the medieval knightly system with its religious, moral, and social code."
    // },
    // {
    //     "primaryCategory": "Patience",
    //     "primaryCategoryDescriptor": "The capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset."
    // },
    // {
    //     "primaryCategory": "Hospitality",
    //     "primaryCategoryDescriptor": "Displaying the friendly and generous reception and entertainment of guests, visitors, or strangers."
    // },
    // {
    //     "primaryCategory": "Independence",
    //     "primaryCategoryDescriptor": "Manifesting self-reliance and autonomy, often creating an individual path or rejecting assistance."
    // },
    // {
    //     "primaryCategory": "Diligence",
    //     "primaryCategoryDescriptor": "Exemplifying persistent work and effort towards accomplishing tasks with conscientiousness and attention to detail."
    // },
    // {
    //     "primaryCategory": "Mysticism",
    //     "primaryCategoryDescriptor": "Pursuing the spiritual apprehension of truths beyond the intellect, engaging with the transcendent or supernatural."
    // },
    // {
    //     "primaryCategory": "Fidelity",
    //     "primaryCategoryDescriptor": "Exhibiting faithfulness and loyalty in personal attachments, be it in romantic relationships or personal bonds."
    // },
    // {
    //     "primaryCategory": "Discipline",
    //     "primaryCategoryDescriptor": "Demonstrating orderly conduct and self-control, often aligned with training or following a code."
    // },
    // {
    //     "primaryCategory": "Tact",
    //     "primaryCategoryDescriptor": "Showing adroitness and sensitivity in dealing with others or with difficult issues, the skill of navigating social situations with finesse."
    // },
    // {
    //     "primaryCategory": "Creativity",
    //     "primaryCategoryDescriptor": "The use of imagination or original ideas to create something, expressing individuality or innovation."
    // },
    // {
    //     "primaryCategory": "Persuasion",
    //     "primaryCategoryDescriptor": "The ability to convince others to do or believe something through reasoning or the use of temptation."
    // },
    // {
    //     "primaryCategory": "Stewardship",
    //     "primaryCategoryDescriptor": "Taking responsible management and care of resources, properties, or institutions often for communal benefit."
    // },
    // {
    //     "primaryCategory": "Eloquence",
    //     "primaryCategoryDescriptor": "The art of using language in an apt, fluent way to convey meaning effectively and persuasively."
    // },
    // {
    //     "primaryCategory": "Altruism",
    //     "primaryCategoryDescriptor": "The belief in or practice of selfless concern for the well-being of others without ulterior motives."
    // }
];

function GeneratorForm() {
  //Open AI setup
  const [openAI, setOpenAI] = useState(new OpenAI({
      apiKey: "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", //OPENAI_API_KEY won't work for some reason?
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
  const [resultCharacteristics, setResultCharacteristics] = useState<PrimaryCategoryData[]>(defaultPrimaryCategoryData);
  const [resultCharacteristicRows, setResultCharacteristicRows] = React.useState(getRowsFromCategoryData(defaultPrimaryCategoryData));

  //Prompt 1
  const [prompt1, setPrompt1] = useState<string>(getPrompt1Default(characteristic))
  const [prompt1Characteristics, setPrompt1Characteristics] = useState<PrimaryCategoryData[]>(defaultPrimaryCategoryData);
  const [prompt1CharacteristicRows, setPrompt1CharacteristicRows] = React.useState(getRowsFromCategoryData(defaultPrimaryCategoryData));
  const [prompt1Processing, setPrompt1Processing] = useState(false);
  const [prompt1AccordionOpen, setPrompt1AccordionOpen] = useState(true);

  //Prompt 2
  const [prompt2, setPrompt2] = useState<string>(getPrompt2OptionsNotCovered(characteristic))
  const [prompt2Feedback, setPrompt2Feedback] = useState<React.ReactNode>("")
  const [prompt2AdditionalElements, setPrompt2AdditionalElements] = useState<PrimaryCategoryData[]>([])
  const [prompt2Processing, setPrompt2Processing] = useState(false);
  const [prompt2AccordionOpen, setPrompt2AccordionOpen] = useState(false);

  //Prompt 3
  const [prompt3, setPrompt3] = useState<string>(getPrompt3Default(characteristic))
  const [prompt3Characteristics, setPrompt3Characteristics] = useState<PrimaryCategoryData[]>(defaultPrimaryCategoryData);
  const [prompt3CharacteristicRows, setPrompt3CharacteristicRows] = React.useState(getRowsFromCategoryData(defaultPrimaryCategoryData));
  const [prompt3Processing, setPrompt3Processing] = useState(false);
  const [prompt3AccordionOpen, setPrompt3AccordionOpen] = useState(false);

  //Prompt 4
  const [prompt4, setPrompt4] = useState<string>(getPrompt4RemoveDuplicationAndSubCategories(characteristic))
  const [prompt4Feedback, setPrompt4Feedback] = useState<React.ReactNode>("")
  const [prompt4Processing, setPrompt4Processing] = useState(false);
  const [prompt4AccordionOpen, setPrompt4AccordionOpen] = useState(false);

  //Prompt 5
  const [prompt5, setPrompt5] = useState<string>(getPrompt5CanItBeImproved(characteristic))
  const [prompt5Feedback, setPrompt5Feedback] = useState<React.ReactNode>("")
  const [prompt5Processing, setPrompt5Processing] = useState(false);
  const [prompt5AccordionOpen, setPrompt5AccordionOpen] = useState(false);


  //Functions
  async function runAll() {
    await submitToGPT(getPrompt1InitialPrimaryCategories(prompt1, characteristic), setPrompt1Processing, setPrompt1AccordionOpen, setPrompt1Characteristics, setPrompt1CharacteristicRows, setResultCharacteristics, setResultCharacteristicRows);
    await getExpansionFeedbackFromGPT(prompt2, setPrompt2Processing, setPrompt2AccordionOpen, setPrompt2Feedback, setPrompt2AdditionalElements);
    //await submitToGPT(getPrompt3IterateBasedOnFeedback(prompt3, characteristic), setPrompt3Processing, setPrompt3AccordionOpen, setPrompt3Characteristics, setPrompt3CharacteristicRows, setResultCharacteristics, setResultCharacteristicRows);
    // await getFeedbackFromGPT(prompt4, setPrompt4Processing, setPrompt4AccordionOpen, setPrompt4Feedback);
    // await getFeedbackFromGPT(prompt5, setPrompt5Processing, setPrompt5AccordionOpen, setPrompt5Feedback);
  }

  async function submitToGPT(prompt: string, processingStateSetter: React.Dispatch<React.SetStateAction<boolean>>, accordionStateSetter: React.Dispatch<React.SetStateAction<boolean>>, setPromptCharacteristics: React.Dispatch<React.SetStateAction<PrimaryCategoryData[]>>, setPromptCharacteristicRows: React.Dispatch<React.SetStateAction<GridValidRowModel[]>>, setResultCharacteristics: React.Dispatch<React.SetStateAction<PrimaryCategoryData[]>>, setResultCharacteristicRows: React.Dispatch<React.SetStateAction<GridValidRowModel[]>>) {
    accordionStateSetter(true)
    processingStateSetter(true)
    if (assistant === undefined || thread === undefined) {
        console.error("assistant or thread undefined");
    } else {
        console.log(prompt);
        let result = await RunPrompt(openAI, assistant, thread, prompt);
        const jsonArray = findJsonArray(result);
        console.log(jsonArray);
        setPromptCharacteristics(jsonArray);
        setPromptCharacteristicRows(getRowsFromCategoryData(jsonArray));
        setResultCharacteristics(jsonArray);
        setResultCharacteristicRows(getRowsFromCategoryData(jsonArray));
    }
    
    processingStateSetter(false)
  }

  async function getExpansionFeedbackFromGPT(prompt: string, processingStateSetter: React.Dispatch<React.SetStateAction<boolean>>, accordionStateSetter: React.Dispatch<React.SetStateAction<boolean>>, setFeedbackResult: React.Dispatch<React.SetStateAction<React.ReactNode>>, setAdditionalElements: React.Dispatch<React.SetStateAction<PrimaryCategoryData[]>>) {
    accordionStateSetter(true)
    processingStateSetter(true)
    if (assistant === undefined || thread === undefined) {
        console.error("assistant or thread undefined");
    } else {
        console.log(prompt);
        let result = await RunPrompt(openAI, assistant, thread, prompt);
        // let resultElements = formatFeedbackResult(result)
        // setFeedbackResult(resultElements);

        const jsonArray = findJsonArray(result);
        console.log(jsonArray);
        console.log("Additional Elements");
        setAdditionalElements(jsonArray);
        setResultCharacteristics(resultCharacteristics.concat(jsonArray));
        setResultCharacteristicRows(resultCharacteristicRows.concat(getRowsFromCategoryData(jsonArray)));
    }

    processingStateSetter(false)
  }

  async function getFeedbackFromGPT(prompt: string, processingStateSetter: React.Dispatch<React.SetStateAction<boolean>>, accordionStateSetter: React.Dispatch<React.SetStateAction<boolean>>, setFeedbackResult: React.Dispatch<React.SetStateAction<React.ReactNode>>) {
    accordionStateSetter(true)
    processingStateSetter(true)
    if (assistant === undefined || thread === undefined) {
        console.error("assistant or thread undefined");
    } else {
        console.log(prompt);
        let result = await RunPrompt(openAI, assistant, thread, prompt);
        let resultElements = formatFeedbackResult(result)

        setFeedbackResult(resultElements);
    }
    
    processingStateSetter(false)
  }
  
  function formatFeedbackResult(input: string) {
    // const difficultySection = input.split('Difficulty')[1].split('To fix this')[0];
    // const difficulties = difficultySection.split('\n')
    //   .filter(line => line.startsWith('-'))
    //   .map(line => line.substring(2).trim());

    const improvementsSection = input.split('Improvements')[1];
    const improvements = improvementsSection.split('\n')
      .filter(line => line.startsWith('-'))
      .map(line => line.substring(2).trim());

    return (
    <Box><Typography variant="h5" sx={{marginTop:1, marginBottom:1}}>
      Consider These Improvements:
    </Typography>
    <List>
      {improvements.map((item, iterator) => {return (<>
      {/* <ListItem>
        {difficulties[iterator]}
      </ListItem> */}
      <ListItem>
      <Checkbox edge="start" checked={true} tabIndex={-1}/>
      <TextField multiline defaultValue={item} fullWidth/></ListItem>
      </>)})}
      </List>
    </Box>)
  }

  return (
  <Box sx={{padding: 2}}> {/* //?? This seems like the wrong way to solve the padding problem.*/}
    <Button
        fullWidth
        sx={{marginTop:1, marginBottom:1}}
        variant="contained"
        endIcon={<SendIcon />}
        onClick={() => {runAll()}}
        disabled={prompt1Processing || prompt2Processing}>
          Run All
    </Button>
    <Grid container spacing={2}>
      <Grid item xs={7.5}>
        <BasePromptAccordion
          title={`Step 1 - Generate Starting ${characteristic} Primary Categories`} 
          expanded={prompt1AccordionOpen}>
          <DataResponsePrompt 
            prompt={prompt1} 
            setPrompt={setPrompt1} 
            processFunction={() => {submitToGPT(getPrompt1InitialPrimaryCategories(prompt1, characteristic), setPrompt1Processing, setPrompt1AccordionOpen, setPrompt1Characteristics, setPrompt1CharacteristicRows, setResultCharacteristics, setResultCharacteristicRows)}} 
            promptProcessing={prompt1Processing}
            promptCharacteristics={prompt1Characteristics}
            promptCharacteristicRows={prompt1CharacteristicRows}
            setPromptCharacteristicRows={setPrompt1CharacteristicRows}
            setResult={() => {
                  setResultCharacteristics(prompt1Characteristics)
                  setResultCharacteristicRows(prompt1CharacteristicRows)
                }}/>
        </BasePromptAccordion>
      </Grid>
      <Grid item xs={4.5}>
        <BasePromptAccordion 
          title={`Step 2 - Get Feedback to Expand ${characteristic} set`}
          expanded={prompt2AccordionOpen}>
          <IterationPrompt 
            title='Request Feedback to Expand Categories'
            prompt={prompt2}
            setPrompt={setPrompt2}
            processFunction={() => {getFeedbackFromGPT(prompt2, setPrompt2Processing, setPrompt2AccordionOpen, setPrompt2Feedback)}} 
            buttonLabel='Request Feedback'
            promptProcessing={prompt2Processing}
            iterationMessage={prompt2Feedback}>
          </IterationPrompt>
        </BasePromptAccordion>
      </Grid>
      <Grid item xs={7.5}>
        <BasePromptAccordion
          title={`Step 3 - Incorporate Selected Feedback`} 
          expanded={prompt3AccordionOpen}>
          <DataResponsePrompt 
            prompt={prompt3} 
            setPrompt={setPrompt3}
            processFunction={() => {submitToGPT(getPrompt3IterateBasedOnFeedback(prompt3, characteristic), setPrompt3Processing, setPrompt3AccordionOpen, setPrompt3Characteristics, setPrompt3CharacteristicRows, setResultCharacteristics, setResultCharacteristicRows)}} 
            promptProcessing={prompt3Processing}
            promptCharacteristics={prompt3Characteristics}
            promptCharacteristicRows={prompt3CharacteristicRows}
            setPromptCharacteristicRows={setPrompt3CharacteristicRows}
            setResult={() => {
                  setResultCharacteristics(prompt3Characteristics)
                  setResultCharacteristicRows(prompt3CharacteristicRows)
                }}/>
        </BasePromptAccordion>
      </Grid>
      <Grid item xs={4.5}>
        <BasePromptAccordion 
        title={`Step 4 - Get Feedback to Merge and Consolidate ${characteristic} set`}
        expanded={prompt4AccordionOpen}>
          <IterationPrompt 
                title='Request Feedback to Merge and Consolidate'
                prompt={prompt4}
                setPrompt={setPrompt4}
                processFunction={() => {getFeedbackFromGPT(prompt4, setPrompt4Processing, setPrompt4AccordionOpen, setPrompt4Feedback)}} 
                buttonLabel='Request Feedback'
                promptProcessing={prompt4Processing}
                iterationMessage={prompt4Feedback}>
          </IterationPrompt>
        </BasePromptAccordion>
      </Grid>
      <Grid item xs={12}>
        <BasePromptAccordion 
        title={`Step 5 - Final Feedback`} 
        expanded={prompt5AccordionOpen}>
          <IterationPrompt 
            title='Final Feedback to Iterate and Improve'
            prompt={prompt5}
            setPrompt={setPrompt5}
            processFunction={() => {getFeedbackFromGPT(prompt5, setPrompt5Processing, setPrompt5AccordionOpen, setPrompt5Feedback)}} 
            buttonLabel='Request Feedback'
            promptProcessing={prompt5Processing}
            iterationMessage={prompt5Feedback}>
          </IterationPrompt>
        </BasePromptAccordion>
      </Grid>
      <Grid item xs={12}>
        <Card >
          <CardHeader title={`Result - Character ${characteristic} Primary Categories`}/>
          <CardContent>
            <CharacteristicGrid primaryCategoryData={resultCharacteristics} rows={resultCharacteristicRows} setRows={setResultCharacteristicRows}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Box>
);}

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

  const testString = `"Items of Difficulty:"
- A character who is deeply connected with nature, embodying the essence of the natural world and the seasons.
- A figure renowned for their ability to mediate disputes and bring about reconciliation between opposing parties.
- A person possessing a profound mystical insight or a connection with the supernatural realm.
- A character who is a master of subterfuge and stealth, skilled in espionage or thievery.
- A wanderer or nomad, characterized by their love of travel and discovery, unbound by ties to any land or lord.
- An individual celebrated for their storytelling prowess, weaving tales that enchant and educate.
- A character known for their hedonistic lifestyle, seeking pleasure and the joys of the senses above all else.

"To fix this, I would suggest these Improvements:"
- Add a primary category "Nature Affinity," with a descriptor emphasizing a strong bond with the environment, appreciation for wildlife, and alignment with the cycles of the earth.
- Introduce a primary category "Mediation," focusing on conflict resolution, peacemaking abilities, and the fostering of cooperation between differing parties.
- Create a primary category "Mysticism," which would capture characters with special spiritual or otherworldly insights, visions, or powers.
- Incorporate a primary category "Cunning," to cover characters skilled in deception, strategy, and tactics that may involve secrecy or manipulation.
- Insert a primary category "Wanderlust," for those driven by an insatiable urge to explore, understand different cultures, and experience the breadth of the world.
- Establish a primary category "Storytelling," for individuals who are adept at captivating audiences with narrative flair and oral tradition.
- Add a primary category "Sensuality," reflecting those who prioritize the pursuit of sensory experiences and pleasures as an ideal.`