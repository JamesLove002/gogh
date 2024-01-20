import mongoose, { ObjectId } from "mongoose";

// export interface Characteristics extends mongoose.Document {
//   primaryCategory: ObjectId;
//   secondaryCategory: ObjectId;
//   tertiaryCategory: ObjectId;
// }

export interface PrimaryCategory extends mongoose.Document {
  title: string;
  descriptor: string;
}

// export interface SecondaryCategory extends mongoose.Document {
//   title: string;
//   descriptor: string;
//   primaryCategory: ObjectId;
// }

// export interface TertiaryCategory extends mongoose.Document {
//   title: string;
//   descriptor: string;
//   secondaryCategory: ObjectId;
// }

// const CharacteristicSchema = new mongoose.Schema<Characteristics>({
//   primaryCategory: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "PrimaryCategory"
//   },
//   secondaryCategory: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "SecondaryCategory"
//   },
//   tertiaryCategory: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "TertiaryCategory"
//   },
// });

const PrimaryCategorySchema = new mongoose.Schema<PrimaryCategory>({
  title: {
    type: String,
  },
  descriptor: {
    type: String,
  },
});

// const SecondaryCategorySchema = new mongoose.Schema<SecondaryCategory>({
//   title: {
//     type: String,
//   },
//   descriptor: {
//     type: String,
//   },
//   primaryCategory: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "PrimaryCategory"
//   },
// })

// const TertiaryCategorySchema = new mongoose.Schema<TertiaryCategory>({
//   title: {
//     type: String,
//   },
//   descriptor: {
//     type: String,
//   },
//   secondaryCategory: {
//     type: mongoose.Schema.Types.ObjectId, 
//     ref: "SecondaryCategory"
//   },
// })

export default mongoose.models.PrimaryCategory || mongoose.model<PrimaryCategory>("PrimaryCategory", PrimaryCategorySchema);
