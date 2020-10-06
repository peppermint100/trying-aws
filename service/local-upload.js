import multer from "multer"
import path from "path"


const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public"),
    filename: (req, file, cb) => {
        cb(null, file.filename + Date.now() + path.extname(file.originalname))
    } 
})

const localUpload = multer({
    storage,
    limits: { fileSize: 100000}
})

export default localUpload