# Backend-Cadastro-Usuarios
#  API de Usuários – Express + Prisma + MongoDB

Projeto simples de **API REST** criado com **Express**, **Prisma ORM (v5)** e **MongoDB**, desenvolvido **exclusivamente para fins de aprendizagem**.

A aplicação permite realizar operações básicas de **CRUD de usuários** (Create, Read, Update, Delete).

---

##  Tecnologias utilizadas

* **Node.js**
* **Express** – framework 
* **Prisma ORM 5** – gerenciamento do banco de dados
* **MongoDB** – banco de dados NoSQL

---

##  Funcionalidades

* Criar usuários
* Listar todos os usuários
* Atualizar usuários pelo ID
* Deletar usuários pelo ID

---

##  Estrutura básica do usuário

Cada usuário possui os seguintes campos:

* `id` (gerado automaticamente pelo Prisma)
* `email` (string)
* `name` (string)
* `age` (number)

---

##  Rotas da API

###  Criar usuário

**POST** `/usuarios`

```json
{
  "email": "teste@email.com",
  "name": "João",
  "age": 25
}
```

---

###  Listar usuário

**GET** `/usuarios`

---

### Atualizar usuário

**PUT** `/usuarios/:id`

```json
{
  "email": "novo@email.com",
  "name": "João Atualizado",
  "age": 26
}
```

---

###  Deletar usuário

**DELETE** `/usuarios/:id`

Resposta:

```json
{
  "message": "SUCESSO: usuário deletado!"
}
```

---

##  Objetivo do projeto

Este projeto **não tem foco em produção**, sendo utilizado apenas para:

* Aprender **Express**
* Entender o uso do **Prisma ORM com MongoDB**
* Praticar conceitos de **API REST**

---

## Fins do desenvolvimento

Projeto desenvolvido para estudo e prática pessoal.

---


