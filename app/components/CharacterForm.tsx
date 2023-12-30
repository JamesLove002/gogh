"use client";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  TextField,
  Divider,
  ButtonGroup,
  Grid,
  IconButton,
  Autocomplete,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextFieldVariants
} from "@mui/material";
import { Field, Form, Formik, FormikErrors } from "formik";
import { ICharacter, IGender } from "../types/ICharacter";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { GenerateCatfolkName } from "@/services/catfolkNames";
import { ChangeEvent, JSX } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { osirianFamilyNames } from "@/services/nameGenerator";
import { FastComplete } from "./FastComplete";

interface CharacterFormProps {
  character?: ICharacter;
  isNewCharacter: boolean;
  raceLocked: boolean;
  genderLocked: boolean;
  nameLocked: boolean;
  idealsLocked: boolean;
  flawsLocked: boolean;
  bondsLocked: boolean;
  traitsLocked: boolean;
  jobCategoryLocked: boolean;
}

const characterSchema = z.object({
  race: z.string().optional(),
  gender: z.enum(["Male", "Female", "Other", ""]).optional(),
  name: z.string().optional(),
  ideals: z.string().optional(),
  flaws: z.string().optional(),
  bonds: z.string().optional(),
  traits: z.string().optional(),
  jobCategory: z.string().optional()
});

function CharacterForm({ character, isNewCharacter }: CharacterFormProps) {
  return (
    <Box className="m-20" sx={{ Width: "66%" }}>
      <Card>
        <Formik
          initialValues={{
            race: "",
            raceLocked: false,
            gender: "",
            genderLocked: false,
            name: "",
            nameLocked: false,
            ideals: "",
            idealsLocked: false,
            flaws: "",
            flawsLocked: false,
            bonds: "",
            bondsLocked: false,
            traits: "",
            traitsLocked: false,
            jobCategory: "",
            jobCategoryLocked: false
          }}
          validationSchema={toFormikValidationSchema(characterSchema)}
          onSubmit={(values, { setSubmitting, setFieldValue }) => {
            //!! There is no submit yet.
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <CardContent>
              <Typography variant="h3" gutterBottom>
                New Character
              </Typography>
              <Box sx={{ my: 2 }}>
                <FastComplete setFieldValue={setFieldValue} />
              </Box>
              <Divider variant="middle" />
              <Box sx={{ my: 2 }}>
                <Form>
                  <Grid container>
                    <Grid item>
                      <Field sx={{ m: 0.7 }} as={TextField} name="race" label="Race" error={errors.race} helperText={touched.race && errors.race} fullwidth />
                    </Grid>
                    <Grid item alignItems="stretch" style={{ display: "flex" }}>
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <IconButton
                          aria-label="lock"
                          onClick={() => {
                            setFieldValue("raceLocked", !values.raceLocked);
                          }}
                        >
                          {values.raceLocked ? <LockIcon /> : <LockOpenIcon />}
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TipsAndUpdatesIcon />
                        </IconButton>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Field sx={{ m: 0.7 }} as={TextField} name="gender" label="Gender" error={errors.gender} helperText={touched.gender && errors.gender} fullWidth />
                    </Grid>
                    <Grid item alignItems="stretch" style={{ display: "flex" }}>
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <IconButton
                          aria-label="lock"
                          onClick={() => {
                            setFieldValue("genderLocked", !values.genderLocked);
                          }}
                        >
                          {values.genderLocked ? <LockIcon /> : <LockOpenIcon />}
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TipsAndUpdatesIcon />
                        </IconButton>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item>
                      <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="name" label="Name" error={errors.name} helperText={touched.name && errors.name} fullWidth />
                    </Grid>
                    <Grid item alignItems="stretch" style={{ display: "flex" }}>
                      <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <IconButton
                          aria-label="lock"
                          onClick={() => {
                            setFieldValue("nameLocked", !values.nameLocked);
                          }}
                        >
                          {values.nameLocked ? <LockIcon /> : <LockOpenIcon />}
                        </IconButton>
                        <IconButton aria-label="delete">
                          <TipsAndUpdatesIcon />
                        </IconButton>
                      </ButtonGroup>
                    </Grid>
                  </Grid>
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="ideals" label="Ideals" error={errors.ideals} helperText={touched.ideals && errors.ideals} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="flaws" label="Flaws" error={errors.flaws} helperText={touched.flaws && errors.flaws} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="bonds" label="Bonds" error={errors.bonds} helperText={touched.bonds && errors.bonds} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="traits" label="Traits" error={errors.traits} helperText={touched.traits && errors.traits} fullWidth />
                  <Field
                    sx={{ m: 0.7, width: "33%" }}
                    className="p-5"
                    as={Autocomplete}
                    name="traits"
                    label="Traits"
                    error={errors.traits}
                    helperText={touched.traits && errors.traits}
                    fullWidth
                    options={jobOptions}
                    disablePortal
                    renderInput={(
                      params: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">
                    ) => <TextField {...params} label="Job Category" />}
                  />
                  <Button
                    variant="contained"
                    startIcon={<AutoAwesomeIcon />}
                    onClick={() => {
                      var newRace = "";
                      var newGender = "";
                      var newName = "";
                      console.log("generating!" + JSON.stringify(values));
                      if (!values.raceLocked) {
                        newRace = generateRace();
                        setFieldValue("race", newRace);
                      }
                      if (!values.genderLocked) {
                        newGender = generateGender();
                        setFieldValue("gender", newGender);
                      }
                      if (!values.nameLocked) {
                        newName = generateName(newRace, newGender);
                        setFieldValue("name", newName);
                      }
                      if (!values.jobCategoryLocked) {
                        setFieldValue("jobCategory", generateJobCategory());
                      }
                    }}
                  >
                    Generate Character
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldValue("race", "");
                      setFieldValue("name", "");
                      setFieldValue("gender", "");
                      setFieldValue("ideals", "");
                      setFieldValue("flaws", "");
                      setFieldValue("bonds", "");
                      setFieldValue("traits", "");
                    }}
                  >
                    Reset Character
                  </Button>
                  <Button
                    onClick={() => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                      }, 400);
                    }}
                  >
                    Print Character
                  </Button>
                </Form>
              </Box>
            </CardContent>
          )}
        </Formik>
      </Card>
    </Box>
  );
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
  ]);
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

export default CharacterForm;
