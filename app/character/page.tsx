import { Box, Card, CardContent } from "@mui/material";
import Virtualize from "../components/CharacterFields/test";
import CharacterForm from "../components/CharacterForm";

export default function Page() {
  return (
    <Box className="character-form" sx={{ minWidth: "600px", Width: "66%" }}>
      <Card>
        <CardContent>
          <>
            <Virtualize />
            <CharacterForm isNewCharacter={true} />;
          </>
        </CardContent>
      </Card>
    </Box>
  );
}
