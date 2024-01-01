import { ICharacter } from "@/app/types/ICharacter";
import { generateGender } from "./generators/genderGenerator";
import { generateRace } from "./generators/raceGenerator";
import { generateName } from "./generators/nameGenerator/nameGenerator";
import { generateJobCategory } from "./generators/jobGenerator";

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
