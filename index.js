import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "SUCESSO: usuário deletado!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default app;