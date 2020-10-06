import express from "express"
import uploadRoute from "./routes/uploadRoute"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors({
}))

//routes
app.use('/api/upload', uploadRoute)

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})