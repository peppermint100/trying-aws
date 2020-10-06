import React from 'react'

const UploadForm = () => {
    const onSubmit = () => {

    }

    const onChange = () => {
        
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="file" onChange={onChange} />
            <button type="submit">Upload</button>
        </form>
    )
}

export default UploadForm
