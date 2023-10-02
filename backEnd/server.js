import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app = express();

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());


// Create Data
app.post("/", async (req, res) => {
  const user = await prisma.details.create({ data: req.body })
  res.json(user)
})

// Get Data
app.get("/", async (req, res) => {
  const allUser = await prisma.details.findMany()
  res.json(allUser)
})



app.listen(5000, () => console.log("Server running on port 5000"));