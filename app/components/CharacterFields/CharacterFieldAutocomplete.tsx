import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { CategorisedOption } from "@/services/generator/generatorUtils";
import { FormikErrors } from "formik";
import { ToTitleCase } from "@/utils/utils";

interface AutoCharacterFieldProps {
  options: CategorisedOption[];
  field: string;
  value: string;
  error: string | undefined;
  touched: boolean | undefined;
  setFieldValue: {
    (field: string, value: any, shouldValidate?: boolean | undefined): Promise<void | FormikErrors<{
      race: string;
      gender: string;
      name: string;
      ideals: string;
      flaws: string;
      bonds: string;
      traits: string;
      jobCategory: string;
    }>>;
    (arg0: string, arg1: string): void;
  };
}

const filter = createFilterOptions<OptionType>({ limit: 100 });

export default function CharacterFieldAutocomplete({ options, field, value, error, touched, setFieldValue }: AutoCharacterFieldProps) {
  const JobOptionsProbabilitied: OptionType[] = options
    .map((job) => {
      const totalWeight = options.reduce((sum, job) => sum + (job.instanceWeight || 0), 0);
      const weightPercentage = ((job.instanceWeight || 0) / totalWeight) * 100;

      return {
        value: job.instance,
        weight: Number(weightPercentage.toFixed(1))
      };
    })
    .sort((a, b) => {
      if (a.weight === b.weight) {
        return a.value.localeCompare(b.value); // Sort alphabetically if weightPercentage is equal
      }
      return b.weight - a.weight;
    });

  return (
    <Autocomplete
      className="character-field"
      sx={{ m: 0.7, marginRight: 0, marginLeft: 0 }} //??Why do the margins mess up the width and cause overlap?
      value={value}
      autoSelect={true}
      onChange={(_, newValue) => {
        if (typeof newValue === "object") {
          setFieldValue(field, newValue?.value);
        } else if (typeof newValue === "string") {
          setFieldValue(field, newValue);
        } else {
          setFieldValue(field, newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option.value);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            value: inputValue
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={JobOptionsProbabilitied}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.value;
      }}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.value, inputValue, { insideWords: true });
        const parts = parse(option.value, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400
                  }}
                >
                  {part.text}
                </span>
              ))}
              <span>{option.weight ? " (" + option.weight + "%)" : ""}</span>
            </div>
          </li>
        );
      }}
      freeSolo
      renderInput={(params) => <TextField {...params} label={ToTitleCase(field)} error={!!error} helperText={error} />} //?? !!string? XD
    />
  );
}

interface OptionType {
  inputValue?: string;
  value: string;
  weight?: number;
}
