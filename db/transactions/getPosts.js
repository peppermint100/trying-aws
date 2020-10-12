export const getPosts = async (db) => {
    let sql = "SELECT * FROM post"
    try{
        const result = await db.query(sql)   
        console.log(result)
    }catch(err){
        if(err){
            console.error(err)
            return null
        }
    }
}