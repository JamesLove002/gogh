"use client";
import { Paper, Container, Card, CardContent, Typography, CardActions, Button, Input, Box, TextField, Divider } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ICharacter } from "../types/ICharacter";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface CharacterFormProps {
  character?: ICharacter;
  isNewCharacter: boolean;
}

const characterSchema = z.object({
  race: z.string().optional(),
  name: z.string().min(2, "Name is required"),
  ideals: z.string().optional(),
  flaws: z.string().optional(),
  bonds: z.string().optional(),
  traits: z.string().optional()
});

function CharacterForm({ character, isNewCharacter }: CharacterFormProps) {
  return (
    <Box className="m-20" sx={{ Width: "66%" }}>
      <Card>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            New Character
          </Typography>
          <Box sx={{ my: 2 }}>
            <TextField fullWidth label="Fast Complete" />
          </Box>
          <Divider variant="middle" />
          <Box sx={{ my: 2 }}>
            <Formik
              initialValues={
                character ?? {
                  race: "",
                  name: "",
                  ideals: "",
                  flaws: "",
                  bonds: "",
                  traits: ""
                }
              }
              validationSchema={toFormikValidationSchema(characterSchema)}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ values, errors, touched, isSubmitting, setFieldValue }) => (
                <Form>
                  <Field sx={{ m: 0.7 }} as={TextField} name="race" label="Race" error={errors.race} helperText={touched.race && errors.race} />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="name" label="Name" error={errors.name} helperText={touched.name && errors.name} />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="ideals" label="Ideals" error={errors.ideals} helperText={touched.ideals && errors.ideals} />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="flaws" label="Flaws" error={errors.flaws} helperText={touched.flaws && errors.flaws} />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="bonds" label="Bonds" error={errors.bonds} helperText={touched.bonds && errors.bonds} />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="traits" label="Traits" error={errors.traits} helperText={touched.traits && errors.traits} />
                  <Button type="submit" disabled={isSubmitting || errors.name} variant="contained">
                    Create Character
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldValue("name", "Cody Love");
                    }}
                  >
                    Print Character
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </CardContent>
        <Box display="flex" justifyContent="flex-end">
          <CardActions>
            <Button variant="contained">Create Character</Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}

export default CharacterForm;
