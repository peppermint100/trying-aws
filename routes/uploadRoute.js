import express from "express"
import s3Upload from "./../service/s3-upload"
import env from "./../config/env"

const router = express.Router()

const s3ImageUpload = s3Upload.single('img')

router.post('/', (req, res) => {
        s3ImageUpload(req, res, (err) => {
        if(err){
            return res.send({ err })
        }

        const text = req.body.text
        const imgLocation = req.file.location
        const imgKey = req.file.key

        return res.json({
            msg: "ok",
            body: req.body
        })
    })
})

export default router