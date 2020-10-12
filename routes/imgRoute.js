import express from "express"
import db from "./../db/db"
import { getPosts } from "./../db/transactions/getPosts"

const router = express.Router()

router.get("/", (req, res) => {
    db.query("SELECT * FROM post", (err, result) => {
        if(err) console.log(err)
        res.send(result)
    })
})
export default router 