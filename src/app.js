import express from "express"
import cors from "cors"

const app = express()

app.use(cors())


import dataRouter from './routers/dataRouter.js'

app.use("", dataRouter)

app.get("/", (req, res) => {
    res.send("App is running...")
})

export default app