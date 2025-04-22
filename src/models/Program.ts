// models/Program.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProgram extends Document {
  title: string;
  image: string;
  duration: string;
  fees: string;
  category: "undergraduate" | "postgraduate" | "certificate";
}

const ProgramSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    duration: { type: String, required: true },
    fees: { type: String, required: true },
    category: {
      type: String,
      enum: ["undergraduate", "postgraduate", "certificate"],
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.model<IProgram>("Program", ProgramSchema);
const Program = mongoose.models.Program || mongoose.model("Program", ProgramSchema);

export default Program;
