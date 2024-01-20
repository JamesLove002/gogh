import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/services/db/dbConnect";
import PrimaryCategory from "@/models/Characteristic";

export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const pets = await PrimaryCategory.find({});
    return NextResponse.json({ data: pets }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 })
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    console.log(data)
    const newPrimaryCategory = new PrimaryCategory({ ...data });
    await newPrimaryCategory.save();
    return NextResponse.json({ message: "Primary category created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
