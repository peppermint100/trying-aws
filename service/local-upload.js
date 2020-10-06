import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../public"),
  filename: function(req, file, cb) {
    cb(null, file.fieldname + Date.now().toString() + path.extname(file.originalname));
  }
});


const localUpload = multer({
    storage,
    limits: { fileSize: 1000000 }
})

export default localUpload