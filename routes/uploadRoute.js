import express from "express"
import s3Upload from "./../service/s3-upload"
import env from "./../config/env"
import db from "./../db/db"
import { insertPost } from "./../db/transactions/insertPost"

const router = express.Router()

const s3ImageUpload = s3Upload.single('img')

router.post('/', (req, res) => {
        s3ImageUpload(req, res, async (err) => {
        if(err){
            return res.send({ err })
        }

        const text = req.body.text
        const imgLocation = req.file.location
        const imgKey = req.file.key

        await insertPost(imgKey, imgLocation, text, db);

        return res.json({
            msg: "ok",
            body: req.body
        })
    })
})



export default router