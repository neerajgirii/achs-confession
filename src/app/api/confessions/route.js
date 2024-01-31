// import { prisma } from "../../libs/prismadb";
import { Prisma } from "@prisma/client";
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
    const responseGET = await prisma.confession.findMany();
    return NextResponse.json(responseGET, { status: 200 });
  } catch (err) {
    console.error("Error in GET route:", err);
    return NextResponse.json(
      { message: `GET error: ${err.message}` },
      { status: 500 }
    );
  }
};
