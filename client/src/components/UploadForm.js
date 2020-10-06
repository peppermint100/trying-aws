import React, { useState } from 'react'
import env from "./../config/env"
import axios from "axios"
import regeneratorRuntime from "regenerator-runtime"

const ENDPOINT = env.ENDPOINT

const UploadForm = () => {
    const containerStyle = {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        height: "20vh"
    }

    const inputStyle = {
        display: "none"
    }

    const buttonStyle ={
        all:"unset",
        display: "block",
        cursor: "pointer",
        fontSize: "24px",
        color: "#555555",
        transform: "translate(-25%, 50%)"
    }

    const labelStyle ={
        padding: "12px 18px",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: "#2980b9",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#fff"
    }

    const [file, setFile] = useState(null)

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!file) return alert('Please select any image file')
        const formData = new FormData()
        formData.append("img", file)
        try{
            const res = await axios.post(`${ENDPOINT}upload`, formData)
            console.log(res)
        }catch(err){
            if(err) console.error(err)
        }
    }

    const onChange = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={onSubmit}>
                <label htmlFor="upload" style={labelStyle}>Select File</label>
                <input onChange={onChange} type="file" id="upload" style={inputStyle}/>
                <button style={buttonStyle} type="submit">🎈 Upload This Image</button>
            </form>
            <section style={{transform: "translate(-20%, 90%)"}}>
                { file ? (
                    <p>{file.name}</p>
                ) : null }
            </section>
        </div>
    )
}

export default UploadForm