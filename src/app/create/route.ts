import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allUsers = await prisma.users.findMany();
  //console.log(allUsers);
  return NextResponse.json(allUsers);
}

export async function POST(request: NextRequest) {
  const { amount, status, customerId } = await request.json();

  const newUser = await prisma.invoices.create({
    data: {
      amount,
      status,
      customerId: Number(customerId),
    },
  });

  return NextResponse.json(newUser);
}
