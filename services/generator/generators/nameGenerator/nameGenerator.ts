import { GenerateCatfolkName } from "./nameLists/catfolkNames";
import { osirianFirstNames } from "./nameLists/osirianiNames";
import { osirianFamilyNames } from "./nameLists/osirianiNames";
import { selectValueFromOptions } from "../../generatorUtils";
import { generateRace } from "../raceGenerator";

export function generateName(race: string, gender: string) {
  var nameGender = gender;
  var race = !race ? generateRace().toLowerCase() : race.toLowerCase();
  if (nameGender == "Other" || !nameGender) nameGender = Math.random() > 0.5 ? "Male" : "Female";

  if (["catfolk", "amurrun"].includes(race)) {
    return GenerateCatfolkName(nameGender);
  }
  if ("human" == race) {
    return nameGender == "Male" ? "Cody" : "Jane";
  }
  if ("osiriani human" == race) {
    return selectValueFromOptions(osirianFirstNames) + " " + selectValueFromOptions(osirianFamilyNames);
  }

  return "";
}
