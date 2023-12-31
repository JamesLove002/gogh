import { ICharacter, IGender } from "@/app/types/ICharacter";
import { GenerateCatfolkName } from "./nameGenerator/catfolkNames";
import { osirianFamilyNames } from "@/services/generator/nameGenerator/nameGenerator";

interface LockOptions {
  race: boolean;
  gender: boolean;
  name: boolean;
  ideals: boolean;
  flaws: boolean;
  bonds: boolean;
  traits: boolean;
  jobCategory: boolean;
}

interface GenerateCharacterProps {
  character: ICharacter;
  locked: LockOptions;
}
export function generateCharacter({ character, locked }: GenerateCharacterProps) {
  console.log("Generating! Starting Character:" + JSON.stringify(character));

  if (!locked.race) {
    character.race = generateRace();
  }
  if (!locked.gender) {
    character.gender = generateGender();
  }
  if (!locked.name) {
    character.name = generateName(character.race, character.gender);
  }
  if (!locked.jobCategory) {
    character.jobCategory = generateJobCategory();
  }

  return character;
}

function generateRace() {
  return selectValueFromWeightedOptions([
    { option: "Human", weighting: 10 },
    { option: "Osiriani Human", weighting: 100 },
    { option: "Amurrun", weighting: 100 }
  ]);
}

function generateGender() {
  return selectValueFromWeightedOptions([
    { option: "Male", weighting: 49.95 },
    { option: "Female", weighting: 49.95 },
    { option: "Other", weighting: 0.1 }
  ]) as IGender;
}

function generateName(race: string, gender: string) {
  var nameGender = gender;
  var race = race.toLowerCase();
  if (nameGender == "Other") nameGender = Math.random() > 0.5 ? "Male" : "Female";

  if (["catfolk", "amurrun"].includes(race)) {
    return GenerateCatfolkName(nameGender as IGender);
  }
  if ("human" == race) {
    return nameGender == "Male" ? "Cody" : "Jane";
  }
  if ("osiriani human" == race) {
    return selectValueFromOptions(osirianFamilyNames) + " " + selectValueFromOptions(osirianFamilyNames);
  }

  return "";
}

function generateJobCategory() {
  return selectValueFromWeightedOptions([
    { option: "Exploration and Travel", weighting: 0.25 },
    { option: "Herbalism", weighting: 0.25 },
    { option: "Information and Espionage", weighting: 0.25 },
    { option: "Academia", weighting: 0.5 },
    { option: "Art", weighting: 0.5 },
    { option: "Beastology", weighting: 0.5 },
    { option: "Crime", weighting: 0.5 },
    { option: "Health", weighting: 0.75 },
    { option: "Adventuring", weighting: 1.0 },
    { option: "Education", weighting: 1.0 },
    { option: "Entertainment", weighting: 1.0 },
    { option: "Environmental Services", weighting: 1.0 },
    { option: "Hospitality", weighting: 1.0 },
    { option: "Magical Arts", weighting: 1.0 },
    { option: "Maratime", weighting: 1.0 },
    { option: "Religion and Faith", weighting: 1.0 },
    { option: "Rulership / Government", weighting: 1.0 },
    { option: "Warfare and Combat", weighting: 1.0 },
    { option: "Law and Order", weighting: 1.5 },
    { option: "Civic Services", weighting: 2.0 },
    { option: "Construction", weighting: 2.0 },
    { option: "Resource Collection", weighting: 3.0 },
    { option: "Craftsmanship", weighting: 6.0 },
    { option: "Trade and Market", weighting: 6.0 },
    { option: "Agriculture", weighting: 66.0 }
  ]);
}

interface OptionWeightPair {
  option: string;
  weighting: number;
}

function selectValueFromWeightedOptions(pairs: OptionWeightPair[]): string {
  const totalWeight = pairs.reduce((sum, pair) => sum + pair.weighting, 0);
  const randomNum = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (let i = 0; i < pairs.length; i++) {
    cumulativeWeight += pairs[i].weighting;
    if (randomNum < cumulativeWeight) {
      return pairs[i].option;
    }
  }

  console.error("unknown error", pairs);
  return "error";
}

function selectValueFromOptions(options: string[]): string | null {
  if (options.length === 0) {
    console.error("No options provided", options);
    return "error - no options";
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

const jobOptions = [
  "Exploration and Travel",
  "Herbalism",
  "Information and Espionage",
  "Academia",
  "Art",
  "Beastology",
  "Crime",
  "Health",
  "Adventuring",
  "Education",
  "Entertainment",
  "Environmental Services",
  "Hospitality",
  "Magical Arts",
  "Maratime",
  "Religion and Faith",
  "Rulership / Government",
  "Warfare and Combat",
  "Law and Order",
  "Civic Services",
  "Construction",
  "Resource Collection",
  "Craftsmanship",
  "Trade and Market",
  "Agriculture"
];
