import { connectDB } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectDB();

    const newEntry = await Enquiry.create(body);

    return NextResponse.json({ success: true, data: newEntry });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Submission failed", error: err }, { status: 500 });
  }
}
