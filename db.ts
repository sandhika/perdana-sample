'use server'
import { Customers, PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;

"use server"
export async function getAllCustomer() {
  const result = await  prisma.customers.findMany({});
  return result;
}

export async function newCustomer(data : Customers) {
  await fetch("/api/customers", {
    method: 'POST',
    // headers: {
    //   Authorization: `Bearer ${arg}`
    // }
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  
  })
}


export async function updateCustomer(data : Customers) {
  await fetch("/api/customers", {
    method: 'PUT',
    // headers: {
    //   Authorization: `Bearer ${arg}`
    // }
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  
  })
}