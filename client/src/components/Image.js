import React from 'react'

const imgStyle = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    objectFit: "cover",
    marginTop: "50px"
}

const commentStyle = {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "600"
}

const Image = ({ img, comment }) => {
    return (
        <div>
           <img src={img} style={imgStyle} /> 
           <p style={commentStyle}>" {comment} "</p>
        </div>
    )
}

export default Image
