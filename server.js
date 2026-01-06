import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express();
const prisma = new PrismaClient();

app.use(express.json());


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
    res.status(500).json({ error: error.message });
  }
});

app.get("/usuarios/",async(req, res) => {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
})

app.put('/usuarios/:id', async(req, res) => {
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age,
        }
    })
        res.status(200).json(user);
})



app.delete('/usuarios/:id', async(req, res) => {
    const user = await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })

    res.status(200).json({mesage:  'SUCESSO: usuário deletado!'});
})

app.listen(3000, () => {

});