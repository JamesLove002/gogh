import mongoose, { ObjectId } from "mongoose";

interface GPTResultLog {
  object: string;
  promptId: string;
  promptText: string;
  response: string;
  result: object;
  threadId: string;
  threadMessages: string[];
  timestamp: Date;
  duration: number;
}

const GPTResultLogSchema = new mongoose.Schema<GPTResultLog>({
  object: {
    type: String
  },
  promptId: {
    type: String
  },
  promptText: {
    type: String
  },
  response: {
    type: String
  },
  result: {
    type: Object
  },
  threadId: {
    type: String
  },
  threadMessages: {
    type: [String]
  },
  timestamp: {
    type: Date
  },
  duration: {
    type: Number
  }
});

export default mongoose.models.GPTResultLog || mongoose.model<GPTResultLog>("GPTResultLog", GPTResultLogSchema);
