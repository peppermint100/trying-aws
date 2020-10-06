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
        return res.json({
            imgUrl: req.file,
            msg: "ok"
        })
    })
})

export default router