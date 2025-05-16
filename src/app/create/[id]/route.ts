// import prisma from "@/lib/data";
import { PrismaClient } from "@prisma/client";

import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { amount, status, customerId } = await request.json();
  const updatedUser = await prisma.invoices.update({
    where: { id: Number(params.id) },
    data: {
      amount,
      status,
      customerId,
    },
  });
  return NextResponse.json(updatedUser);
}
