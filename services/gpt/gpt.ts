const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: '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'
});

const isDebugMode =  false;
const characteristic = "ideals and values"
const example = "\r\nHonor - descriptor\r\nCunning - descriptor\r\nDetermination - Descriptor"
const p1GetPrimaryCategories = `Generate a rich, diverse set of primary categories that we can use to categorise every conceivable character ${characteristic}. \r\n Provide the response in the following format: Count: 3. The following rich list of diverse primary categories are all unqiue and can be used to group secondary categories which cover 1-5000 possible ${characteristic}: ${example}`
const p2TestPrimaryCategories = `What ${characteristic} might exist that don't fit within those categories? \r\n Provide the response in the following format: Count: 3. The following specific character ${characteristic} examples might be difficult to group under the preceeding list of primary categories, suggesting the existing list could be improved to make it richer and better for grouping all possible character ${characteristic}: ${example}`
const p3ConsiderMergeOrDemotion = `Merging those two lists together, and noting that a subcategory could match one or more primary categories, which ${characteristic} might be duplicates, or better options to be a subcategory? Please provide a list of the final primary categories you would recommend to maximise richness, diversity and completeness while avoiding duplication or subcategories being on the primary category list. Count: 3. The following rich list of diverse primary categories are all unqiue and can be used to group secondary categories which cover 1-5000 possible ${characteristic} ${example}`
const p4ReviewComments = `Given the objective to categorise all possible character ${characteristic} with a rich, diverse and comprehensive set of primary categories, what comments would you make about the final list of primary categories? Could it be further improved? If so, how?`
const p5IterateCommand = `Awesome! Iterate the list to improve from that feedback!`

async function generateDataSet() {
  const assistant = await openai.beta.assistants.create({
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

  const thread = await openai.beta.threads.create();
  const threadID = thread.id;

  console.log(`\r\n###`);
  console.log(`\r\nQuestion 1: ${p1GetPrimaryCategories}`);
  await promptAndResponse(p1GetPrimaryCategories, assistant.id, threadID);
  console.log(`\r\n###`);
  console.log(`\r\nQuestion 2: ${p2TestPrimaryCategories}`);
  await promptAndResponse(p2TestPrimaryCategories, assistant.id, threadID);
  console.log(`\r\n###`);
  console.log(`\r\nQuestion 3: ${p3ConsiderMergeOrDemotion}`);
  await promptAndResponse(p3ConsiderMergeOrDemotion, assistant.id, threadID);
  console.log(`\r\n###`);
  console.log(`\r\nQuestion 4: ${p4ReviewComments}`);
  await promptAndResponse(p4ReviewComments, assistant.id, threadID);
  console.log(`\r\n###`);
  console.log(`\r\nQuestion 4: ${p5IterateCommand}`);
  await promptAndResponse(p5IterateCommand, assistant.id, threadID);
  
}

async function promptAndResponse(prompt: string, assistantId: string, threadId: string) {
  await openai.beta.threads.messages.create(
    threadId,
    {
      role: "user",
      content: prompt
    }
  );

  const run = await openai.beta.threads.runs.create(
    threadId,
    {
      assistant_id: assistantId,
    }
  );

  let runStatus;
  let loopCount = 0;
  let startingTimestamp = new Date().getTime();
  console.log(`/r/n Running. Waiting 10 seconds before first status check.`);
  await new Promise(resolve => setTimeout(resolve, 10000));

  do {
    loopCount++;
    const updatedRun = await openai.beta.threads.runs.retrieve(threadId, run.id);
    runStatus = updatedRun.status;

    const delay = new Date().getTime() - startingTimestamp;
    console.log(`(${loopCount}) Run status: ${runStatus} delay: ${delay}`);

    if (runStatus !== "completed") {
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } while (runStatus !== 'completed');

  const threadMessages = await openai.beta.threads.messages.list(threadId);

  // console.log("Thread Messages: ", threadMessages);
  const sortedMessages = threadMessages.data.sort((a: { created_at: number; }, b: { created_at: number; }) => b.created_at - a.created_at);
  const latestAssistantMessage = sortedMessages.filter((message: { role: string; }) => message.role === 'assistant')[0];
  // console.log(`\r\n\n\nSortedMessages: ${JSON.stringify(sortedMessages)}`);
  // console.log(`\r\n\n\nlatestAssistantMessage: ${JSON.stringify(latestAssistantMessage)}`);
  // console.log(`\r\n\n\nlatestAssistantMessage.content: ${JSON.stringify(latestAssistantMessage.content)}`);
  // console.log(`\r\n\n\nlatestAssistantMessage.content: ${JSON.stringify(latestAssistantMessage.content[0].text)}`);
  // console.log(`\r\n\n\nlatestAssistantMessage.content: ${JSON.stringify(latestAssistantMessage.content[0].text.value)}`);
  // console.log("\r\n\n\nWITHOUT STRINGIFY")
  // console.log(`\r\n\n\nlatestAssistantMessage.content: ${latestAssistantMessage.content}`);
  // console.log(`\r\n\n\nlatestAssistantMessage.content: ${latestAssistantMessage.content[0].text}`);
  console.log(`\r\n\n\nlatestAssistantMessage.content: ${latestAssistantMessage.content[0].text.value}`);
}

generateDataSet();

// 1. Integrity - Encompassing honor, honesty, and moral uprightness, with a steadfast adherence to a personal or communal ethical code.
// 2. Ingenuity - Including strategizing, innovation, and creativity, reflecting the ability to solve problems with cleverness and original thinking.
// 3. Fortitude - Combining perseverance, bravery, and resilience, signifying strength of mind and spirit in adversity or challenges.
// 4. Sagacity - Focusing on wisdom, enlightenment, and insight, valuing deep understanding, thoughtfulness, and foresight.
// 5. Allegiance - Blending together devotion, loyalty, and filial piety, depicting strong dedication to people, places, ideals, or traditions.
// 6. Equitability - Merging fairness and justice, emphasizing impartiality, rights, and responsibilities, while seeking social harmony.
// 7. Compassion - Integrating empathy with acts of kindness and altruism, addressing the emotional and practical needs of others.
// 8. Heritage - Broadening conservation to include tradition, sustainability, and community reciprocity, emphasizing the preservation and respect for past legacies, as well as environmental stewardship.
// 9. Autonomy - Highlighting individualism, freedom, and self-reliance, reflecting the value placed on personal choice and independence.
// 10. Serenity - Capturing harmony, equilibrium, and peace, focusing on the pursuit of balance in one's inner life and external surroundings, and the reduction of strife.

// First Result, 45
// Honor
// Justice
// Courage
// Wisdom
// Compassion
// Integrity
// Loyalty
// Duty
// Piety
// Humility
// Temperance
// Chastity
// Charity
// Diligence
// Patience
// Generosity
// Fortitude
// Discipline
// Ambition
// Creativity
// Sociability
// Independence
// Resilience
// Ingenuity
// Leadership
// Prudence
// Assertiveness
// Resourcefulness
// Humor
// Optimism
// Gratitude
// Honesty
// Sincerity
// Harmony
// Perseverance
// Eloquence
// Frugality
// Asceticism
// Individualism
// Progressivism
// Romanticism
// Tradition
// Innovation
// Mystery
// Eclecticism