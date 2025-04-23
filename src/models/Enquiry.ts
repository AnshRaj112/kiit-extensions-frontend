import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  city: { type: String, required: true },
  courseInterested: { type: String, required: true},
  consent: { type: Boolean, default: false },
}, { timestamps: true });

const Enquiry = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export default Enquiry;
