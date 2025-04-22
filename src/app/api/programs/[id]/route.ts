import { connectDB } from "@/lib/db";
import Program from "@/models/Program";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();
    const id = req.nextUrl.pathname.split("/").pop();

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid or missing ID" }, { status: 400 });
    }

    const updated = await Program.findByIdAndUpdate(id, body, { new: true });
    if (!updated) {
      return NextResponse.json({ success: false, message: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to update program", error: String(err) },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    const id = req.nextUrl.pathname.split("/").pop();

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json({ success: false, message: "Invalid or missing ID" }, { status: 400 });
    }

    const deleted = await Program.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ success: false, message: "Program not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Program deleted successfully" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to delete program", error: String(err) },
      { status: 500 }
    );
  }
}
