import express from "express"
import uploadRoute from "./routes/uploadRoute"
import cors from "cors"
import env from "./config/env"

const app = express()
const PORT = process.env.PORT || 5000
const CLIENT = process.env.CLIENT || "http://localhost:8080"

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors({
    origin: CLIENT
}))

//routes
app.use('/api/upload', uploadRoute)

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})