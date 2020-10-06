import React, { useState } from 'react'
import env from "./../config/env"

const ENDPOINT = env.ENDPOINT

const UploadForm = () => {
    const containerStyle = {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px"
    }

    const inputStyle = {
        display: "none"
    }

    const buttonStyle ={
        all:"unset",
        display: "inline",
        cursor: "pointer",
        fontSize: "24px",
        color: "#555555"
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
    // const [img, setImg] = useState({
    //     fileName: "",
    //     filePath: ""
    // })

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(file)
        if(!file){
            alert('Please Upload any image file')
            return;
        }
        const formData = new FormData()
        formData.append(file)
        try{
            const res = await axios.post(`${ENDPOINT}/upload`, formData)
            console.log(res)
        }catch(err){
            if(err) console.error(err)
        }

    }

    const onChange = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    return (
        <div style={containerStyle}>
            
            <form onSubmit={onSubmit}>
                <label htmlFor="upload" style={labelStyle}>Select File</label>
                <input type="file" id="upload" onChange={onChange} style={inputStyle} />
                <div>
                    { file ? 
                        (
                            <>
                                <img src={file.filePath} />
                                <p>{file.name}</p>
                                <button type="submit" style={buttonStyle}>📌 Upload This Image</button>
                            </>
                        )
                        : null
                    }
                </div>
            </form>
        </div>
    )
}

export default UploadForm
