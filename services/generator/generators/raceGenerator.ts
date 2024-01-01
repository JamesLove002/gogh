import { CategorisedOption, selectValueFromWeightedOptions, selectValuesFromWeightedCategorisedOptions } from "../generatorUtils";

export function generateRace() {
  return selectValuesFromWeightedCategorisedOptions(raceOptions);
}

export const raceOptions: CategorisedOption[] = [
  { category: "Humanoid", subCategory: "Human", instance: "Human", instanceWeight: 10 },
  { category: "Humanoid", subCategory: "Human", instance: "Osiriani Human", instanceWeight: 100 },
  { category: "Humanoid", subCategory: "Alakahin", instance: "Amurrun", instanceWeight: 100 }
];
