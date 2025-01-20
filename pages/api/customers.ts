import type { NextApiRequest, NextApiResponse } from "next";
import { Customers } from "@prisma/client";
import prisma from "@/db";

// Fake users data

export default async function getAllCustomer(
  _req: NextApiRequest,
  res: NextApiResponse<Customers[]>,
) {
  // Get data from your database
  if (_req.method === 'GET') {
    const result = await prisma.customers.findMany();
    res.status(200).json(result);
  }else if(_req.method ==='POST') {
    const data = _req.body;
    const result = await prisma.customers.create({
        data: {
            name: data.name,
            cif: data.cif,
            birth_place: data.birth_place,
            birth_date: data.birth_date,
            gender: data.gender,
            email: data.email,
            phone: data.phone,
            address: data.address
        },
      });

      res.status(200).json(result);
  }
}