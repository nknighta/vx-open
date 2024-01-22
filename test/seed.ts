import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        username: 'Alice',
        address: 'Tokyo',
      }
    })

    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
  }

main();