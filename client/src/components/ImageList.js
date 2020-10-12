import React from 'react'
import env from "../config/env"
import img from "./../../public/img.png"
import Image from "./Image"

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const ImageList = () => {
    console.log(env.ENDPOINT)
    return (
        <div style={containerStyle}>
            <Image img={img} comment={"hello world"}/> 

            <Image img={img} comment={"hello world"}/> 
            <Image img={img} comment={"hello world"}/> 
            <Image img={img} comment={"hello world"}/> 
            <Image img={img} comment={"hello world"}/> 
            <Image img={img} comment={"hello world"}/> 
        </div>
    )
}

export default ImageList
