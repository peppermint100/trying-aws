import dotenv from "dotenv"

dotenv.config()

export default {
    CLIENT: process.env.CLIENT || "http://localhost:8080",
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_ACCESS_ID:process.env.AWS_ACCESS_ID,
    AWS_REGION:process.env.AWS_REGION,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
    AWS_RDS_HOST: process.env.AWS_RDS_HOST,
    AWS_RDS_USER: process.env.AWS_RDS_USER,
    AWS_RDS_PASSWORD: process.env.AWS_RDS_PASSWORD,
}