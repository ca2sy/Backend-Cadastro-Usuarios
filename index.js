import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

// Inicialização do Prisma com tratamento de erro
let prisma;

try {
  prisma = new PrismaClient({
    log: ['error', 'warn'],
  });
} catch (error) {
  console.error("Erro ao inicializar Prisma:", error);
}

app.use(express.json());
app.use(cors());

// Rota de health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API rodando!" });
});

app.get("/usuarios", async (req, res) => {
  try {
    if (!prisma) {
      throw new Error("Prisma Client não inicializado");
    }
    
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ 
      error: error.message,
      details: "Erro ao buscar usuários"
    });
  }
});

app.post("/usuarios", async (req, res) => {
  try {
    if (!prisma) {
      throw new Error("Prisma Client não inicializado");
    }
    
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ 
      error: error.message,
      details: "Erro ao criar usuário"
    });
  }
});

app.put("/usuarios/:id", async (req, res) => {
  try {
    if (!prisma) {
      throw new Error("Prisma Client não inicializado");
    }
    
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ 
      error: error.message,
      details: "Erro ao atualizar usuário"
    });
  }
});

app.delete("/usuarios/:id", async (req, res) => {
  try {
    if (!prisma) {
      throw new Error("Prisma Client não inicializado");
    }
    
    await prisma.user.delete({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "SUCESSO: usuário deletado!" });
  } catch (error) {
    console.error("Erro:", error);
    res.status(500).json({ 
      error: error.message,
      details: "Erro ao deletar usuário"
    });
  }
});

export default app;