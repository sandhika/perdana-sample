import type { NextApiRequest, NextApiResponse } from "next";
import { Transaction } from "@prisma/client";
import prisma from "@/db";

// Fake users data

export default async function getAllAccount(
  _req: NextApiRequest,
  res: NextApiResponse<Transaction[]>,
) {
  // Get data from your database
  if (_req.method === 'GET') {
    const result = await prisma.transaction.findMany();
    res.status(200).json(result);
  }else if(_req.method ==='POST') {
    const data = _req.body;
    const result = await prisma.transaction.create({
        data,
      });

      res.status(200).json(result);
  }
}