'use server'
import { Accounts, Customers, PrismaClient, Transaction } from '@prisma/client'

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
  await fetch(`/api/customers/${data.id}`, {
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

export async function delCustomer(data : Customers) {
  await fetch(`/api/customers/${data.id}`, {
    method: 'DELETE',
    // headers: {
    //   Authorization: `Bearer ${arg}`
    // }
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
}

/////////////////////////////////////////////////


export async function newAccount(data : Accounts) {
  await fetch("/api/accounts", {
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


export async function updateAccounts(data : Accounts) {
  await fetch(`/api/accounts/${data.id}`, {
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

export async function delAccounts(data : Accounts) {
  await fetch(`/api/accounts/${data.id}`, {
    method: 'DELETE',
    // headers: {
    //   Authorization: `Bearer ${arg}`
    // }
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
}


/////////////////////////////////////////////////


export async function newTransaction(data : Transaction) {
  await fetch("/api/transaction", {
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


export async function updateTransaction(data : Transaction) {
  await fetch(`/api/transaction/${data.id}`, {
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

export async function delTransaction(data : Transaction) {
  await fetch(`/api/transaction/${data.id}`, {
    method: 'DELETE',
    // headers: {
    //   Authorization: `Bearer ${arg}`
    // }
    headers: {
      'Content-Type': 'application/json',
    },
  
  })
}