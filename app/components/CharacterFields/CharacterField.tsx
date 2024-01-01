import { ButtonGroup, Grid, IconButton, TextField } from "@mui/material";
import { Field, FormikErrors } from "formik";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { ToTitleCase } from "@/utils/utils";
import CharacterFieldAutocomplete from "./CharacterFieldAutocomplete";
import { CategorisedOption } from "@/services/generator/generatorUtils";
import { generateRace } from "@/services/generator/generators/raceGenerator";
import { generateGender } from "@/services/generator/generators/genderGenerator";
import { generateName } from "@/services/generator/generators/nameGenerator/nameGenerator";
import { generateJobCategory } from "@/services/generator/generators/jobGenerator";

interface CharacterFieldProps {
  field: string;
  options?: CategorisedOption[];
  value?: string;
  fieldLocked: boolean;
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
  generateFunction?: any;
}

function CharacterField({ field, options, value, fieldLocked, error, touched, setFieldValue, generateFunction }: CharacterFieldProps) {
  return (
    <Grid container>
      <Grid item sx={{ width: "calc(100% - 84px)" }}>
        {options ? (
          <Field as={CharacterFieldAutocomplete} options={options} field={field} value={value} error={error} helperText={touched && error} setFieldValue={setFieldValue} />
        ) : (
          <Field
            className="character-field"
            sx={{ m: 0.7, marginRight: 0, marginLeft: 0, width: "100%" }}
            as={TextField}
            name={field}
            label={ToTitleCase(field)}
            error={error}
            helperText={touched && error}
            fullWidth
          />
        )}
      </Grid>
      <Grid item alignItems="stretch" style={{ display: "flex" }}>
        <ButtonGroup sx={{ height: "56px", marginTop: "5.6px" }} variant="outlined" aria-label="outlined button group">
          <IconButton
            sx={{ borderRadius: 0, borderRightRadius: "5px", border: "1px solid #c4c4c4" }}
            aria-label="lock"
            onClick={() => {
              setFieldValue(field + "Locked", !fieldLocked);
            }}
          >
            {fieldLocked ? <LockIcon /> : <LockOpenIcon />}
          </IconButton>
          <IconButton
            sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderTopRightRadius: "5px", borderBottomRightRadius: "5px", border: "1px solid #c4c4c4" }}
            onClick={() => {
              setFieldValue(field, generateFunction());
            }}
          >
            <TipsAndUpdatesIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default CharacterField;
