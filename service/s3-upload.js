import multer from "multer"
import multerS3 from "multer-s3"
import aws from "aws-sdk"
import env from "./../config/env"

aws.config.update({
  secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: env.AWS_ACCESS_ID,
  region: env.AWS_REGION 
})
 
const s3 = new aws.S3()

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else{
        cb(new Error('Invalid File Type'), false)
    }
}

const storage = multerS3({
    s3,
    bucket: env.AWS_S3_BUCKET_NAME,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: "test"});
    },
    key: function (req, file, cb) {
      cb(null, file.fileName + Date.now().toString())
    }
}) 

const s3Upload = multer({
    fileFilter,
    storage,
    limits: { fileSize: 1000000 }
})

export default s3Upload