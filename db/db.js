import mysql from "mysql"
import env from "./../config/env"

export default mysql.createConnection({
    host     : env.AWS_RDS_HOST,
    user     : env.AWS_RDS_USER,
    password : env.AWS_RDS_PASSWORD,
    database : 'tryingaws'
  });
