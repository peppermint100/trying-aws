import express from "express"

const router = express.Router()

router.post('/', (req, res) => {
    res.send({
        msg: 'hello world'
    })
})

export default router