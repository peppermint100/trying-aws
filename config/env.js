import dotenv from "dotenv"

dotenv.config()

export default {
    CLIENT: process.env.CLIENT || "http://localhost:8080",
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_ID:process.env.AWS_ACCESS_ID,
    AWS_REGION:process.env.AWS_REGION,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME
}