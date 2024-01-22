import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/services/db/dbConnect";
import { ObjectId } from "mongoose";
import GPTResultLog from "@/models/GPTResultLog";

const objectType = "GPT Result Log";

export async function GET(req: NextRequest) {
  console.log(req);
  await dbConnect();
  try {
    const pets = await GPTResultLog.find({});
    return NextResponse.json({ data: pets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
  console.log("req");
  console.log(req);
  await dbConnect();
  try {
    const data = await req.json();
    console.log("data");
    console.log(data);
    const newGPTResultLog = new GPTResultLog({ ...data });
    console.log("newGPTResultLog");
    console.log(newGPTResultLog);
    await newGPTResultLog.save();
    return NextResponse.json({ message: `${objectType} created successfully` }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    const updatedGPTResultLog = await GPTResultLog.findByIdAndUpdate(data.id as ObjectId, data, { new: true });
    if (!updatedGPTResultLog) {
      return NextResponse.json({ message: `${objectType} not found` }, { status: 404 });
    }
    return NextResponse.json({ message: `${objectType} updated successfully`, data: updatedGPTResultLog }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  await dbConnect();
  try {
    const data = await req.json();
    console.log(data);
    const deletedGPTResultLog = await GPTResultLog.findByIdAndDelete(data.id as ObjectId);
    if (!deletedGPTResultLog) {
      return NextResponse.json({ message: `${objectType} not found` }, { status: 404 });
    }
    return NextResponse.json({ message: `${objectType} deleted successfully` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
