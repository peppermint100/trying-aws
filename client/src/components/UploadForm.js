import React, { useState } from 'react'
import env from "./../config/env"
import axios from "axios"
import regeneratorRuntime from "regenerator-runtime"

const ENDPOINT = env.ENDPOINT

const containerStyle = {
    position: "relative",
    marginTop: "100px",
    height: "20vh"
}

const formStyle = {
        display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "200px"
}

const fileInputStyle = {
    display: "none"
}

const textInputStyle = {
    all: "unset",
    width: "500px",
    height: "30px",
    border: "1.5px solid #bdc3c7",
}

const labelStyle ={
    all:"unset",
    display: "block",
    cursor: "pointer",
    fontSize: "24px",
    color: "#555555",
}

const buttonStyle ={
    all: "unset",
    display: "block",
    width: "120px",
    textAlign: "center",
    padding: "12px 18px",
    cursor: "pointer",
    backgroundColor: "#2980b9",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#fff"
}


const UploadForm = () => {
    const [file, setFile] = useState(undefined)
    const [text, setText] = useState("")

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!file) return alert('Please select any image file')
        const formData = new FormData()
        formData.append("img", file)
        formData.append("text", text)
        try{
            const res = await axios.post(`${ENDPOINT}upload`, formData)
            console.log(res)
            
        }catch(err){
            if(err) console.error(err)
        }
            setText("")
    }

    const onSelectFile = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    }

    const onChangeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div style={containerStyle}>
            <form onSubmit={onSubmit} style={formStyle}>
                <label htmlFor="upload" style={labelStyle}>🎈 Select File</label>
                <input onChange={onSelectFile} type="file" id="upload" style={fileInputStyle}/>
                <section>
                { file ? (
                    <p>{file.name}</p>
                ) : <p>No file selected</p> }
                </section>
                <input onChange={onChangeText} type="text" style={textInputStyle} placeholder="How's it going?" value={text} />
                <button style={buttonStyle} type="submit"> Upload </button>
            </form>
        </div>
    )
}

export default UploadForm