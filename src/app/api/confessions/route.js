import { Prisma } from "../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const response = await request.json();
    const { crushName, crushClass, crushConfession, status } = response;

    const newConfession = await prisma.confession.create({
      data: {
        crushName,
        crushClass,
        crushConfession,
        status,
      },
    });
    return NextResponse.json(newConfession, { status: 201 });
  } catch (err) {
    NextResponse.json({ message: "POST error" }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const response = await prisma.confession.findMany();
    return NextResponse.json(response, { status: 200 });
  } catch (err) {
    NextResponse.json({ message: "GET error" }, { status: 500 });
  }
};
