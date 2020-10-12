import React, { useState, useEffect } from 'react'
import env from "../config/env"
import img from "./../../public/img.png"
import Image from "./Image"
import axios from "axios"

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const ImageList = () => {
    
    const [posts, setPosts] = useState(null)

    const getPosts = async () => {
        console.log('hello')
        try{
            const res = await axios.get(`${env.ENDPOINT}img`) 
            setPosts(res.data)
        }catch(err){
            if(err) console.error(err)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div style={containerStyle}>
            {
                posts ? 
                (
                    <ul>
                        {posts.map(post => (
                            <li key={post.imgKey} style={{listStyle: "none"}}>
                                <Image img={post.imgLocation} comment={post.imgText}/>
                            </li>
                        ))}
                    </ul>
                )
                : <h1>Loading...</h1>
            }
        </div>
    )
}

export default ImageList
