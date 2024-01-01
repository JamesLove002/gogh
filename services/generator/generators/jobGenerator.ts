import { CategorisedOption, selectValuesFromWeightedCategorisedOptions } from "../generatorUtils";

export function generateJobCategory() {
  return selectValuesFromWeightedCategorisedOptions(jobOptions);
}

export const jobOptions: CategorisedOption[] = [
  { category: "", subCategory: "", instance: "Exploration and Travel", instanceWeight: 0.25 }, //Put this under adventuring
  { category: "", subCategory: "", instance: "Herbalism", instanceWeight: 0.25 },
  { category: "", subCategory: "", instance: "Information and Espionage", instanceWeight: 0.25 }, //Consider putting this under warfare
  { category: "", subCategory: "", instance: "Academia", instanceWeight: 0.5 },
  { category: "", subCategory: "", instance: "Art", instanceWeight: 0.5 },
  { category: "", subCategory: "", instance: "Beastology", instanceWeight: 0.5 },
  { category: "", subCategory: "", instance: "Crime", instanceWeight: 0.5 },
  { category: "", subCategory: "", instance: "Health", instanceWeight: 0.75 },
  { category: "", subCategory: "", instance: "Adventuring", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Education", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Entertainment", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Environmental Services", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Hospitality", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Magical Arts", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Maratime", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Religion and Faith", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Rulership / Government", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Warfare and Combat", instanceWeight: 1.0 },
  { category: "", subCategory: "", instance: "Law and Order", instanceWeight: 1.5 },
  { category: "", subCategory: "", instance: "Civic Services", instanceWeight: 2.0 },
  { category: "", subCategory: "", instance: "Construction", instanceWeight: 2.0 },
  { category: "", subCategory: "", instance: "Resource Collection", instanceWeight: 3.0 },
  { category: "", subCategory: "", instance: "Craftsmanship", instanceWeight: 6.0 },
  { category: "", subCategory: "", instance: "Trade and Market", instanceWeight: 6.0 },
  { category: "", subCategory: "", instance: "Agriculture", instanceWeight: 10.0 } //Temp drop to 10 for testing
];
