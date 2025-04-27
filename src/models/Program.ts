// models/Program.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProgram extends Document {
  title: string;
  image: string;
  duration: string;
  fees: string;
  category: "undergraduate" | "postgraduate" | "certificate";
  link: string;  // Add this field for the link to the detail page
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
    link: { type: String, required: true },  // Store the link to the program detail page
  },
  { timestamps: true }
);

const Program = mongoose.models.Program || mongoose.model("Program", ProgramSchema);

export default Program;
