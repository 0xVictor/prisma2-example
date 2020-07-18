import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function create() {
  const user = await prisma.user.create({
    data: {
      name: "João Víctor",
      email: "j.victor12@live.com",
    },
  });

  console.log(user);
}

async function getAllUsers() {
  const allUsers = await prisma.user.findMany({
    include: {
      Post: true,
    },
  });

  console.log(allUsers);
}

// create();
getAllUsers();
