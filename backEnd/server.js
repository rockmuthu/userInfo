import express from "express"
import { PrismaClient } from "@prisma/client"
import cors from "cors"

const app = express()
const port = 5000

const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())


// Create Data
app.post("/", async (req, res) => {
  await prisma.details.create({ data: req.body }).then(() => res.sendStatus(200))
})

// Get Data
app.get("/", async (_req, res) => {
  await prisma.details.findMany({}).then((data) => res.status(200).json(data))
})



app.listen(port, () => console.log(`Server running on port ${port}`))