import React, { useState } from 'react'

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
        backgroundColor: "#8ebf42",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#fff"
    }

    const [file, setFile] = useState(null)
    const [img, setImg] = useState({
        fileName: "",
        filePath: ""
    })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(file)
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
