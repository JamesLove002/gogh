import { ICharacter } from "@/app/types/ICharacter";
import { generateGender } from "./generators/genderGenerator";
import { generateRace } from "./generators/raceGenerator";
import { generateName } from "./generators/nameGenerator/nameGenerator";
import { generateJobCategory } from "./generators/jobGenerator";
import { generateBond } from "./generators/bondGenerator";
import { generateTrait } from "./generators/traitGenerator";
import { generateIdeal } from "./generators/idealGenerator";
import { generateFlaw } from "./generators/flawGenerator";

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
  if (!locked.ideals) {
    character.ideals = generateIdeal();
  }
  if (!locked.flaws) {
    character.flaws = generateFlaw();
  }
  if (!locked.bonds) {
    character.bonds = generateBond();
  }
  if (!locked.traits) {
    character.traits = generateTrait();
  }
  if (!locked.jobCategory) {
    character.jobCategory = generateJobCategory();
  }

  return character;
}
