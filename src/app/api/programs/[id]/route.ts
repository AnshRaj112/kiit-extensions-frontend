// app/api/programs/[id]/route.ts
import { connectDB } from "@/lib/db";
import Program from "@/models/Program";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const body = await req.json();

    const updated = await Program.findByIdAndUpdate(params.id, body, { new: true });
    if (!updated) return NextResponse.json({ success: false, message: "Program not found" }, { status: 404 });

    return NextResponse.json({ success: true, data: updated });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to update program", error: err },
      { status: 400 }
    );
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectDB();

    const deleted = await Program.findByIdAndDelete(params.id);
    if (!deleted) return NextResponse.json({ success: false, message: "Program not found" }, { status: 404 });

    return NextResponse.json({ success: true, message: "Program deleted successfully" });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to delete program", error: err },
      { status: 500 }
    );
  }
}
