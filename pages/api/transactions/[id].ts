import type { NextApiRequest, NextApiResponse } from "next";
import {Transaction} from "@prisma/client";
import prisma from "@/db";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Transaction>,
) {
  const { query, method,body } = req;
  const id = parseInt(query.id as string, 10);

  switch (method) {
    case "GET":
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}` });
      break;
    case "PUT":
      // Update or create data in your database
      const result = await prisma.transaction.update(
        {
            where: {
              id,
            },
            data: body,
        }
      );
      res.status(200).json(result);
      break;
    case "DELETE":
        // Update or create data in your database
        const resultDel = await prisma.transaction.delete(
          {
              where: {
                id,
              },
              
          }
        );
        res.status(200).json(resultDel);
        break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}