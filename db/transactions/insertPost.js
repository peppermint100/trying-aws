export const insertPost = async (imgKey, imgLocation, imgText, db) => {
    let sql = `INSERT INTO post(imgKey, imgLocation, imgText) VALUES("${imgKey}", "${imgLocation}", "${imgText}")`
    try{
        const result = await db.query(sql)   
        console.log(result)
    }catch(err){
        if(err){
            console.error(err)
        }
    }
}