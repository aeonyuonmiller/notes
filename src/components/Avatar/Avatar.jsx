import React from 'react'
import './Avatar.css'

const Avatar = (props) => {
    return (
        <div className="wrapper" onClick={props.onClick}>
            <p>🙉</p>
        </div>
    )
}

export default Avatar
