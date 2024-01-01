import { FormikErrors } from "formik";
import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

export function FastComplete({
  setFieldValue //?? Surely this is the wrong way to type this.
}: {
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
}) {
  return (
    <TextField
      label="Fast Complete"
      fullWidth
      onChange={(e) => {
        fastCompleteCore(e, setFieldValue);
      }}
    />
  );
}

function fastCompleteCore(
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
  }
) {
  const input: string = e.target.value;
  input.split(/[,|;]/g).forEach((el: string) => {
    const lowerEl = el.toLowerCase();

    // Race
    if (lowerEl.includes("race")) {
      var race: string = "";
      var raceFound: boolean = false;
      if (lowerEl.includes("=")) {
        race = el.substring(el.indexOf("=") + 1, el.length);
        raceFound = true;
      }
      if (lowerEl.includes("~")) {
        race = el.substring(el.indexOf("~"), el.length);
        raceFound = true;
      }
      if (raceFound) {
        setFieldValue("race", race.trim());
      }
    }

    // Gender
    if (lowerEl.includes("gender")) {
      var gender = "";
      var genderFound: boolean = false;
      if (lowerEl.includes("=")) {
        gender = el.substring(el.indexOf("=") + 1, el.length);
        genderFound = true;
      }
      if (lowerEl.includes("~")) {
        gender = el.substring(el.indexOf("~"), el.length);
        genderFound = true;
      }
      if (genderFound) {
        setFieldValue("gender", gender.trim());
      }
    }

    // Name
    if (lowerEl.includes("name")) {
      var name: string = "";
      var nameFound: boolean = false;
      if (lowerEl.includes("=")) {
        name = el.substring(el.indexOf("=") + 1, el.length);
        nameFound = true;
      }
      if (lowerEl.includes("~")) {
        name = el.substring(el.indexOf("~"), el.length);
        nameFound = true;
      }
      if (nameFound) {
        setFieldValue("name", name.trim());
      }
    }

    // Ideals
    if (lowerEl.includes("ideal")) {
      var ideals: string = "";
      var idealsFound: boolean = false;
      if (lowerEl.includes("=")) {
        ideals = el.substring(el.indexOf("=") + 1, el.length);
        idealsFound = true;
      }
      if (lowerEl.includes("~")) {
        ideals = el.substring(el.indexOf("~"), el.length);
        idealsFound = true;
      }
      if (idealsFound) {
        setFieldValue("ideals", ideals.trim());
      }
    }

    // Flaws
    if (lowerEl.includes("flaw")) {
      var flaws: string = "";
      var flawsFound: boolean = false;
      if (lowerEl.includes("=")) {
        flaws = el.substring(el.indexOf("=") + 1, el.length);
        flawsFound = true;
      }
      if (lowerEl.includes("~")) {
        flaws = el.substring(el.indexOf("~"), el.length);
        flawsFound = true;
      }
      if (flawsFound) {
        setFieldValue("flaws", flaws.trim());
      }
    }

    // Bonds
    if (lowerEl.includes("bond")) {
      var bonds: string = "";
      var bondsFound: boolean = false;
      if (lowerEl.includes("=")) {
        bonds = el.substring(el.indexOf("=") + 1, el.length);
        bondsFound = true;
      }
      if (lowerEl.includes("~")) {
        bonds = el.substring(el.indexOf("~"), el.length);
        bondsFound = true;
      }
      if (bondsFound) {
        setFieldValue("bonds", bonds.trim());
      }
    }

    // Traits
    if (lowerEl.includes("trait")) {
      var traits: string = "";
      var traitsFound: boolean = false;
      if (lowerEl.includes("=")) {
        traits = el.substring(el.indexOf("=") + 1, el.length);
        traitsFound = true;
      }
      if (lowerEl.includes("~")) {
        traits = el.substring(el.indexOf("~"), el.length);
        traitsFound = true;
      }
      if (traitsFound) {
        setFieldValue("traits", traits.trim());
      }
    }

    // Job Category
    if (lowerEl.includes("jobcategory") || lowerEl.includes("job category") || lowerEl.includes("job")) {
      var jobcategory: string = "";
      var jobcategoryFound: boolean = false;
      if (lowerEl.includes("=")) {
        jobcategory = el.substring(el.indexOf("=") + 1, el.length);
        jobcategoryFound = true;
      }
      if (lowerEl.includes("~")) {
        jobcategory = el.substring(el.indexOf("~"), el.length);
        jobcategoryFound = true;
      }
      if (jobcategoryFound) {
        setFieldValue("jobCategory", jobcategory.trim());
      }
    }
  });
}
