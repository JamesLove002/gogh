import { CategorisedOption, selectValueFromWeightedOptions, selectValuesFromWeightedCategorisedOptions } from "../generatorUtils";

export function generateGender() {
  return selectValuesFromWeightedCategorisedOptions(genderOptions);
}

export const genderOptions: CategorisedOption[] = [
  { category: "", subCategory: "", instance: "Male", instanceWeight: 49.94 },
  { category: "", subCategory: "", instance: "Female", instanceWeight: 49.94 },
  { category: "", subCategory: "", instance: "Other", instanceWeight: 0.12 }
];
