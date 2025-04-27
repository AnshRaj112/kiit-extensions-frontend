import { connectDB } from "@/lib/db";
import Program from "@/models/Program";
import { NextRequest, NextResponse } from "next/server";

// Get all programs or by category
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const query = category ? { category } : {};

    const programs = await Program.find(query);
    
    // Returning programs with the link field included
    return NextResponse.json({ success: true, data: programs });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch programs", error: err },
      { status: 500 }
    );
  }
}

// Create new program
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectDB();

    const { title, image, duration, fees, category, link } = body;
    
    // Ensure the link field is passed and validate
    if (!link || typeof link !== 'string') {
      return NextResponse.json(
        { success: false, message: "Link is required and should be a string." },
        { status: 400 }
      );
    }

    // Create a new program with the link field
    const newProgram = await Program.create({ title, image, duration, fees, category, link });

    return NextResponse.json({ success: true, data: newProgram }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to create program", error: err },
      { status: 400 }
    );
  }
}
