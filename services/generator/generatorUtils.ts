interface OptionWeightPair {
  option: string;
  weighting: number;
}

export function selectValuesFromWeightedCategorisedOptions(options: CategorisedOption[]): string {
  const pairs = options.map((option) => ({ option: option.instance, weighting: option.instanceWeight }));
  return selectValueFromWeightedOptions(pairs);
}

export function selectValueFromWeightedOptions(options: OptionWeightPair[]): string {
  const totalWeight = options.reduce((sum, pair) => sum + pair.weighting, 0);
  const randomNum = Math.random() * totalWeight;

  let cumulativeWeight = 0;
  for (let i = 0; i < options.length; i++) {
    cumulativeWeight += options[i].weighting;
    if (randomNum < cumulativeWeight) {
      return options[i].option;
    }
  }

  console.error("unknown error", options);
  return "error";
}

export function selectValueFromOptions(options: string[]): string | null {
  if (options.length === 0) {
    console.error("No options provided", options);
    return "error - no options";
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

export interface CategorisedOption {
  category: string;
  subCategory: string;
  instance: string;
  instanceWeight: number;
}
