"use client";
import { Card, CardContent, Typography, Button, Box, Divider, ButtonGroup } from "@mui/material";
import { Form, Formik } from "formik";
import { ICharacter } from "../types/ICharacter";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { FastComplete } from "./FastComplete";
import CharacterField from "./CharacterFields/CharacterField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { generateCharacter } from "@/services/generator/generator";
import React from "react";
import { genderOptions } from "@/services/generator/generators/genderGenerator";
import { raceOptions } from "@/services/generator/generators/raceGenerator";
import { jobOptions } from "@/services/generator/generators/jobGenerator";

interface CharacterFormProps {
  character?: ICharacter;
  isNewCharacter: boolean;
}

const characterSchema = z.object({
  race: z.string().optional(),
  gender: z.string().optional(),
  name: z.string().optional(),
  ideals: z.string().optional(),
  flaws: z.string().optional(),
  bonds: z.string().optional(),
  traits: z.string().optional(),
  jobCategory: z.string().optional()
});

function CharacterForm({ character, isNewCharacter }: CharacterFormProps) {
  return (
    <Box className="character-form" sx={{ minWidth: "600px", Width: "66%" }}>
      <Card>
        <Formik
          initialValues={{
            //Doesn't yet implement editing a character
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
          onSubmit={(values) => console.log("Submitting!" + values) /*Not yet implemented*/}
          validationSchema={toFormikValidationSchema(characterSchema)}
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
              <Form>
                {/*??can I simplify this interface? Probably not really.*/}
                <Box sx={{ my: 2 }}>
                  <CharacterField field="race" options={raceOptions} value={values.race} fieldLocked={values.raceLocked} error={errors.race} touched={touched.race} setFieldValue={setFieldValue} />{" "}
                  <CharacterField
                    field="gender"
                    options={genderOptions}
                    value={values.gender}
                    fieldLocked={values.genderLocked}
                    error={errors.gender}
                    touched={touched.gender}
                    setFieldValue={setFieldValue}
                  />
                  <CharacterField field="name" fieldLocked={values.nameLocked} error={errors.name} touched={touched.name} setFieldValue={setFieldValue} />
                  <CharacterField field="ideals" fieldLocked={values.idealsLocked} error={errors.ideals} touched={touched.ideals} setFieldValue={setFieldValue} />
                  <CharacterField field="flaws" fieldLocked={values.flawsLocked} error={errors.flaws} touched={touched.flaws} setFieldValue={setFieldValue} />
                  <CharacterField field="bonds" fieldLocked={values.bondsLocked} error={errors.bonds} touched={touched.bonds} setFieldValue={setFieldValue} />
                  <CharacterField field="traits" fieldLocked={values.traitsLocked} error={errors.traits} touched={touched.traits} setFieldValue={setFieldValue} />
                  <CharacterField
                    field="jobCategory"
                    options={jobOptions}
                    fieldLocked={values.jobCategoryLocked}
                    value={values.jobCategory}
                    error={errors.jobCategory}
                    touched={touched.jobCategory}
                    setFieldValue={setFieldValue}
                  />
                </Box>
                <ButtonGroup sx={{ width: "100%" }}>
                  <Button
                    sx={{ width: "calc(100%/3)" }}
                    variant="contained"
                    startIcon={<AutoAwesomeIcon />}
                    onClick={() => {
                      var generatedCharacter = generateCharacter({
                        character: {
                          race: values.race,
                          gender: values.gender,
                          name: values.name,
                          ideals: values.ideals,
                          flaws: values.flaws,
                          bonds: values.bonds,
                          traits: values.traits,
                          jobCategory: values.jobCategory
                        },
                        locked: {
                          race: values.raceLocked,
                          gender: values.genderLocked,
                          name: values.nameLocked,
                          ideals: values.idealsLocked,
                          flaws: values.flawsLocked,
                          bonds: values.bondsLocked,
                          traits: values.traitsLocked,
                          jobCategory: values.jobCategoryLocked
                        }
                      });
                      setFieldValue("race", generatedCharacter.race);
                      setFieldValue("gender", generatedCharacter.gender);
                      setFieldValue("name", generatedCharacter.name);
                      setFieldValue("ideals", generatedCharacter.ideals);
                      setFieldValue("flaws", generatedCharacter.flaws);
                      setFieldValue("bonds", generatedCharacter.bonds);
                      setFieldValue("traits", generatedCharacter.traits);
                      setFieldValue("jobCategory", generatedCharacter.jobCategory);
                    }}
                  >
                    Generate Character
                  </Button>
                  <Button
                    sx={{ width: "calc(100%/3)" }}
                    startIcon={<RestartAltIcon />}
                    onClick={() => {
                      setFieldValue("race", "");
                      setFieldValue("name", "");
                      setFieldValue("gender", "");
                      setFieldValue("ideals", "");
                      setFieldValue("flaws", "");
                      setFieldValue("bonds", "");
                      setFieldValue("traits", "");
                      setFieldValue("jobCategory", "");
                      setFieldValue("raceLocked", false);
                      setFieldValue("nameLocked", false);
                      setFieldValue("genderLocked", false);
                      setFieldValue("idealsLocked", false);
                      setFieldValue("flawsLocked", false);
                      setFieldValue("bondsLocked", false);
                      setFieldValue("traitsLocked", false);
                      setFieldValue("jobCategoryLocked", false);
                    }}
                  >
                    Reset Character
                  </Button>
                  <Button
                    sx={{ width: "calc(100%/3)" }}
                    startIcon={<OpenInNewIcon />}
                    onClick={() => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                      }, 400);
                    }}
                  >
                    Print Character
                  </Button>
                </ButtonGroup>
              </Form>
            </CardContent>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

export default CharacterForm;
