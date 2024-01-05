import Virtualize from "../components/CharacterFields/test";
import CharacterForm from "../components/CharacterForm";

export default function Page() {
  return (
    <>
      <Virtualize />
      <CharacterForm isNewCharacter={true} />;
    </>
  );
}
