import { SSL_OP_NETSCAPE_CA_DN_BUG } from "constants"
import express from "express"

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.file)
})

export default router