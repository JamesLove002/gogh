import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/services/db/dbConnect";
import PrimaryCategory from "@/models/Characteristic";
import { ObjectId } from "mongoose";

export async function GET(req: NextRequest) {
  await dbConnect();
  try {
    const pets = await PrimaryCategory.find({});
    return NextResponse.json({ data: pets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const newPrimaryCategory = new PrimaryCategory({ ...data });
    await newPrimaryCategory.save();
    return NextResponse.json({ message: "Primary category created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const updatedPrimaryCategory = await PrimaryCategory.findByIdAndUpdate(data.id as ObjectId, data, { new: true });
    if (!updatedPrimaryCategory) {
      return NextResponse.json({ message: "Primary category not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Primary category updated successfully", data: updatedPrimaryCategory }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    console.log(data)
    const deletedPrimaryCategory = await PrimaryCategory.findByIdAndDelete(data.id as ObjectId);
    if (!deletedPrimaryCategory) {
      return NextResponse.json({ message: "Primary category not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Primary category deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
