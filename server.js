import express from "express"
import uploadRoute from "./routes/uploadRoute"
import imgRoute from "./routes/imgRoute"
import cors from "cors"
import env from "./config/env"
import db from "./db/db" 

const app = express()
const PORT = process.env.PORT || 5000
const CLIENT = env.CLIENT 

db.connect((err) => {
    if(err) throw err
    console.log('db connected...')
})

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors({
    origin: CLIENT
}))

//routes
app.use('/api/upload', uploadRoute)
app.use('/api/img', imgRoute)

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})
