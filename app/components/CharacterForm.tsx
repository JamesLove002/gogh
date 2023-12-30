"use client";
import { Paper, Container, Card, CardContent, Typography, CardActions, Button, Input, Box, TextField, Divider } from "@mui/material";
import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { ICharacter } from "../types/ICharacter";
import { string, z } from "zod";
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
  function fastComplete(e, setFieldValue) {
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
          {({ values, errors, touched, isSubmitting, setFieldValue, setTouched }) => (
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
                  <Field sx={{ m: 0.7 }} as={TextField} name="race" label="Race" error={errors.race} helperText={touched.race && errors.race} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="name" label="Name" error={errors.name} helperText={touched.name && errors.name} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="ideals" label="Ideals" error={errors.ideals} helperText={touched.ideals && errors.ideals} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="flaws" label="Flaws" error={errors.flaws} helperText={touched.flaws && errors.flaws} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="bonds" label="Bonds" error={errors.bonds} helperText={touched.bonds && errors.bonds} fullWidth />
                  <Field sx={{ m: 0.7 }} className="p-5" as={TextField} name="traits" label="Traits" error={errors.traits} helperText={touched.traits && errors.traits} fullWidth />
                  <Button type="submit" disabled={isSubmitting || errors.name} variant="contained">
                    Create Character
                  </Button>
                  <Button
                    onClick={() => {
                      setFieldValue("race", "");
                      setFieldValue("name", "");
                      setFieldValue("ideals", "");
                      setFieldValue("flaws", "");
                      setFieldValue("bonds", "");
                      setFieldValue("traits", "");
                    }}
                  >
                    Reset Character
                  </Button>
                </Form>
              </Box>
            </CardContent>
            // <Box display="flex" justifyContent="flex-end">
            //   <CardActions>
            //     <Button variant="contained">Create Character</Button>
            //   </CardActions>
            // </Box>
          )}
        </Formik>
      </Card>
    </Box>
  );
}

export default CharacterForm;
