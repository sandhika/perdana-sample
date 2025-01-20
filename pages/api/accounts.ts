import type { NextApiRequest, NextApiResponse } from "next";
import { Accounts } from "@prisma/client";
import prisma from "@/db";

// Fake users data

export default async function getAllAccount(
  _req: NextApiRequest,
  res: NextApiResponse<Accounts[]>,
) {
  // Get data from your database
  if (_req.method === 'GET') {
    const result = await prisma.accounts.findMany();
    res.status(200).json(result);
  }else if(_req.method ==='POST') {
    const data = _req.body;
    const result = await prisma.accounts.create({
        data,
      });

      res.status(200).json(result);
  }
}