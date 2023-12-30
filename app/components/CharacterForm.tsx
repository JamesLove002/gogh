"use client";
import { Card, CardContent, Typography, Button, Box, TextField, Divider, ButtonGroup, Grid, IconButton } from "@mui/material";
import { Field, Form, Formik, FormikErrors } from "formik";
import { ICharacter, IGender } from "../types/ICharacter";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { GenerateCatfolkName } from "@/services/catfolkNames";
import { ChangeEvent } from "react";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { osirianFamilyNames } from "@/services/nameGenerator";

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
}

const characterSchema = z.object({
  race: z.string().optional(),
  gender: z.enum(["Male", "Female", "Other", ""]).optional(),
  name: z.string().optional(),
  ideals: z.string().optional(),
  flaws: z.string().optional(),
  bonds: z.string().optional(),
  traits: z.string().optional()
});

function CharacterForm({ character, isNewCharacter }: CharacterFormProps) {
  function fastComplete(
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
        var gender: IGender = "";
        var genderFound: boolean = false;
        if (lowerEl.includes("=")) {
          gender = el.substring(el.indexOf("=") + 1, el.length) as IGender;
          genderFound = true;
        }
        if (lowerEl.includes("~")) {
          gender = el.substring(el.indexOf("~"), el.length) as IGender;
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
      if (lowerEl.includes("ideals")) {
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
      if (lowerEl.includes("flaws")) {
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
      if (lowerEl.includes("bonds")) {
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
      if (lowerEl.includes("traits")) {
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
    });
  }

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
            traitsLocked: false
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
                <TextField
                  fullWidth
                  label="Fast Complete"
                  onChange={(e) => {
                    fastComplete(e, setFieldValue);
                  }}
                />
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
                      }
                      if (!values.genderLocked) {
                        newGender = generateGender();
                      }
                      if (!values.nameLocked) {
                        newName = generateName(newRace, newGender);
                      }
                      if (!values.raceLocked) {
                        setFieldValue("race", newRace);
                      }
                      if (!values.genderLocked) {
                        setFieldValue("gender", newGender);
                      }
                      if (!values.nameLocked) {
                        setFieldValue("name", newName);
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

export default CharacterForm;
