import OpenAI from "openai";

const object = "Character";

export async function getAssistant(openAI: OpenAI, characteristic: string) {
  return await openAI.beta.assistants.create({
    name: getAssistantName(object, characteristic),
    instructions: getAssistantInsturctions(object, characteristic),
    model: "gpt-4-1106-preview"
  });
}

function getAssistantName(object: string, characteristic: string): string {
  return `${object} ${characteristic} generator}`;
}

function getAssistantInsturctions(object: string, characteristic: string): string {
  object = object[object.length] === "s" ? object : object + "s";
  characteristic = characteristic[characteristic.length] === "s" ? characteristic : characteristic + "s";

  return `Your expertise spans from the ancient era through to the Renaissance, aiding in creating a comprehensive dataset for randomly generating characters for fantasy stories set in these historical periods. Your role encompasses providing authentic details on culture, occupations, societal norms, and regional variations across these eras. You avoid eurocentric bias, and encompass ideas from different cultures such as chinese, japanese, egyptian, persian, middle eastern, african, south american, aztec, american indian, indiginious, korean aswell as european cultural contexts. Offer in-depth historical context to ensure characters align with their respective settings, whether in ancient Rome, Egypt, Greece, Persia, medieval Europe, or the Renaissance. Handle requests for specific regions, time periods, or social classes to enhance the richness and diversity of the characters. Engage users with informative and captivating historical insights, and ask clarifying questions if details are vague. 

  The primary task you're engaged in is generating a rich and detailed set of 1000-5000 ${object} ${characteristic}s categorized with primary, secondary and tertiary categories. 
  - Generate 10-40 Primary Categories
  - Generate 15-50 Secondary Categories per Primary Category
  - Generate 5-25 Tertiary Categories per Secondary Category
  
  This dataset must be rich, diverse and comprehensive, with each element being unique. Any conceivable characteristic should be categorisable under one or more primary and secondary categories.
  
  Tailor your responses to demonstrate a profound understanding of these historical eras, in a diverse array of cultures, time periods and historical or fictional contexts.`;
}

export async function getThread(openAI: OpenAI) {
  return await openAI.beta.threads.create();
}

const example = `Provide the response in the following format, a valid JSON Array:
[{"title": "Integrity", "descriptor": "Encompassing honor, honesty, and moral uprightness, with a steadfast adherence to a personal or communal ethical code."},
{"title": "Compassion", "descriptor": "Integrating empathy with acts of kindness and altruism, addressing the emotional and practical needs of others."},
{"title": "Serenity", "descriptor": "Capturing harmony, equilibrium, and peace, focusing on the pursuit of balance in one's inner life and external surroundings, and the reduction of strife."}]`;

//The following rich list of diverse primary categories are all unqiue and can be used to group secondary categories which cover 1-5000 possible ${characteristic}s:

export function getPrompt1Default(characteristic: string) {
  return `Generate a rich, diverse set of 10-40 primary categories that we can use to categorise every conceivable ${object} ${characteristic}.`;
}

export function getPrompt1InitialPrimaryCategories(prompt: string, characteristic: string) {
  return `${prompt}

${example}`;
}

export function getPrompt2OptionsNotCovered(characteristic: string) {
  return `What specific character ${characteristic} examples might be difficult to group under the preceding list of primary categories, suggesting the existing list could be improved to make it richer and better for grouping all possible character ${characteristic}?
  
Provide the response in the following format

"Items of Difficulty:
- dot points 

To address each of those difficulties, I would adding these additional or broadened Primary Categories: (Valid JSON Array)
[{"primaryCategory": "Integrity", "primaryCategoryDescriptor": "Encompassing honor, honesty, and moral uprightness, with a steadfast adherence to a personal or communal ethical code."},
{"primaryCategory": "Compassion", "primaryCategoryDescriptor": "Integrating empathy with acts of kindness and altruism, addressing the emotional and practical needs of others."},
{"primaryCategory": "Serenity", "primaryCategoryDescriptor": "Capturing harmony, equilibrium, and peace, focusing on the pursuit of balance in one's inner life and external surroundings, and the reduction of strife."}]"`;
}

export function getPrompt3Default(characteristic: string) {
  return `Action that feedback to iterate the ${object} ${characteristic}s list and improve it.`;
}

export function getPrompt3IterateBasedOnFeedback(prompt: string, characteristic: string) {
  return `${prompt}

  ${example}`;
}

export function getPrompt4RemoveDuplicationAndSubCategories(characteristic: string) {
  return `For the aim of a final primary category set which you would recommend to maximise richness, diversity and completeness while avoiding duplication or subcategories being on the primary category list:
Iterate on the ${object} ${characteristic}s to merge duplicates, or remove options which would be better as subcategories. 

Answer in the following format:
"To consolidate, I would suggest these improvements:"
- dot points`;
}

export function getPrompt5CanItBeImproved(characteristic: string) {
  return `Given the objective to categorise all possible ${object} ${characteristic}s with a rich, diverse and comprehensive set of primary categories, what comments would you make about the final list of primary categories? Could it be further improved? If so, how?
Answer in the following format:
"I would suggest these improvements:"
- dot points`;
}

export async function RunPrompt(openAI: OpenAI, assistant: OpenAI.Beta.Assistants.Assistant, thread: OpenAI.Beta.Threads.Thread, prompt: string) {
  return await promptAndResponse(openAI, prompt, assistant.id, thread.id);
}

async function promptAndResponse(openAI: OpenAI, prompt: string, assistantId: string, threadId: string) {
  await openAI.beta.threads.messages.create(threadId, {
    role: "user",
    content: prompt
  });

  const run = await openAI.beta.threads.runs.create(threadId, {
    assistant_id: assistantId
  });

  let runStatus;
  let loopCount = 0;
  let startingTimestamp = new Date();
  let startingMilliseconds = startingTimestamp.getTime();
  let delayMilliseconds = 0;
  console.log(`Running. Waiting 10 seconds before first status check.`);
  await new Promise((resolve) => setTimeout(resolve, 10000));

  do {
    loopCount++;
    const updatedRun = await openAI.beta.threads.runs.retrieve(threadId, run.id);
    runStatus = updatedRun.status;

    delayMilliseconds = new Date().getTime() - startingMilliseconds;
    console.log(`(${loopCount}) Run status: ${runStatus} delay: ${delayMilliseconds}`);

    if (runStatus !== "completed") {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  } while (runStatus !== "completed");

  const threadMessages = await openAI.beta.threads.messages.list(threadId);

  const sortedMessages = threadMessages.data.sort((a: { created_at: number }, b: { created_at: number }) => b.created_at - a.created_at);
  const latestAssistantMessageContent = sortedMessages.filter((message: { role: string }) => message.role === "assistant")[0].content[0];
  if (latestAssistantMessageContent.type != "text") {
    throw "Unexpected response type";
  }
  const response = latestAssistantMessageContent.text.value;
  return {
    response: response,
    timestamp: startingTimestamp,
    durationSeconds: delayMilliseconds / 1000,
    threadMessages: threadMessages.data
  };
}

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

// [{"category": "Integrity", "descriptor": "Encompassing honor, honesty, and moral uprightness, with a steadfast adherence to a personal or communal ethical code. This reflects the virtues upheld by historical figures such as Confucius, and the strong societal expectations found in many cultures, from Rome's Republican virtues to the African Ubuntu philosophy."},

// {"category": "Compassion", "descriptor": "Integrating empathy with acts of kindness and altruism, addressing the emotional and practical needs of others. Values held dear by compassionate rulers like Ashoka of India, echoed in spiritual movements such as Buddhist loving-kindness or Christian charity."},

// {"category": "Serenity", "descriptor": "Capturing harmony, equilibrium, and peace, focusing on the pursuit of balance in one's inner life and external surroundings, and the reduction of strife. This ideal resonates with the Taoist principles of balance, the peaceful doctrines of Jainism, and the tranquility sought in Japanese Zen gardens."},

// {"category": "Ambition", "descriptor": "Embodying the drive for success, power, and achievement, often associated with empire builders like Genghis Khan or innovative minds of the Renaissance."},

// {"category": "Loyalty", "descriptor": "Valuing steadfast allegiance and faithfulness to a leader, cause, or community, as seen among the loyal retainers of feudal Japan, the tribal bonds of the Bedouins, and the filial piety promoted in Confucianism."},

// {"category": "Courage", "descriptor": "Relating to bravery in the face of fear, characteristic of legendary heroes like Achilles, the valorous actions of African warrior kings, or the defiance of Spartacus."},

// {"category": "Independence", "descriptor": "Praising self-reliance, freedom, and autonomy, characteristics promoted in the democratic polis of Athens, by the Enlightenment philosophers, or within the tribal societies of the Americas."},

// {"category": "Tradition", "descriptor": "Upholding ancestral customs, heritage, and the wisdom of predecessors, fundamental to the maintaining of culture in Native American societies, the social fabric of feudal Europe, and Confucian respect for the past."},

// {"category": "Curiosity", "descriptor": "Promoting the pursuit of knowledge, exploration, and intellectual growth, a trait celebrated by thinkers of the Renaissance, ancient Greek philosophers, and the innovative scientists of the Islamic Golden Age."},

// {"category": "Justice", "descriptor": "Focusing on fairness, rule of law, and righteousness, manifest in the principles of Ma'at in ancient Egypt, the Roman judicial system, and the concept of Dharmic law in South Asia."}]
