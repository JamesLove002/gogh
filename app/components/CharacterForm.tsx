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
import { GenerateCatfolkName } from "@/services/generator/nameGenerator/catfolkNames";
import { ChangeEvent, JSX } from "react";
import { FastComplete } from "./FastComplete";
import CharacterField from "./CharacterField";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { generateCharacter } from "@/services/generator/generator";

interface CharacterFormProps {
  character?: ICharacter;
  isNewCharacter: boolean;
}

const characterSchema = z.object({
  race: z.string().optional(),
  gender: z.enum(["Male", "male", "Female", "female", "Other", "other", ""]).optional(), //?? How do I neatly validate this without case sensitivity? https://stackoverflow.com/questions/26604730/can-json-schema-enums-be-case-insensitive
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
                  {/*can I simplify this interface? Probably not really.*/}
                  <CharacterField field="race" fieldLocked={values.raceLocked} error={errors.race} touched={touched.race} setFieldValue={setFieldValue} />{" "}
                  <CharacterField field="gender" fieldLocked={values.genderLocked} error={errors.gender} touched={touched.gender} setFieldValue={setFieldValue} />
                  <CharacterField field="name" fieldLocked={values.nameLocked} error={errors.name} touched={touched.name} setFieldValue={setFieldValue} />
                  <CharacterField field="ideals" fieldLocked={values.idealsLocked} error={errors.ideals} touched={touched.ideals} setFieldValue={setFieldValue} />
                  <CharacterField field="flaws" fieldLocked={values.flawsLocked} error={errors.flaws} touched={touched.flaws} setFieldValue={setFieldValue} />
                  <CharacterField field="bonds" fieldLocked={values.bondsLocked} error={errors.bonds} touched={touched.bonds} setFieldValue={setFieldValue} />
                  <CharacterField field="traits" fieldLocked={values.traitsLocked} error={errors.traits} touched={touched.traits} setFieldValue={setFieldValue} />
                  <CharacterField field="jobCategory" fieldLocked={values.jobCategoryLocked} error={errors.jobCategory} touched={touched.jobCategory} setFieldValue={setFieldValue} />
                  {/*How do I have autosuggestions without limiting validation to those options?*/}
                  {/* <Field
                    sx={{ m: 0.7, width: "33%" }}
                    className="p-5"
                    as={Autocomplete}
                    name="jobCategory"
                    error={errors.traits}
                    helperText={touched.traits && errors.traits}
                    fullWidth
                    options={jobOptions}
                    disablePortal
                    renderInput={(
                      params: JSX.IntrinsicAttributes & { variant?: TextFieldVariants | undefined } & Omit<FilledTextFieldProps | OutlinedTextFieldProps | StandardTextFieldProps, "variant">
                    ) => <TextField {...params} label="Job Category" />}
                  /> */}
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      startIcon={<AutoAwesomeIcon />}
                      onClick={() => {
                        var generatedCharacter = generateCharacter({
                          character: {
                            race: values.race,
                            gender: values.gender as IGender,
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
              </Box>
            </CardContent>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

export default CharacterForm;
