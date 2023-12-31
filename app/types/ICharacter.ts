export interface ICharacter {
  race: string;
  gender: IGender;
  name: string;
  ideals: string;
  flaws: string;
  bonds: string;
  traits: string;
  jobCategory: string;
}

export type IGender = "Male" | "Female" | "Other" | "";

//id: string;
//   powers: string;
//   secrets: string;
//   beliefs: string;
//   motivations: string;
//   title: string;
//   archetype: string;
//   fears: string;
//   job: string;
//   storyRole: string;
//   culture: string;
//   backstory: string;
//   personalityArc: string;
//   internalConflict: string;
//   externalGoals: string;
//   relationships: string;
//   keySkills: string;
//   characterArc: string;
//   societalRole: string;
//   interestsAndHobbies: string;
//   quotes: string;
