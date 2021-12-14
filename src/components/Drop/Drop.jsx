import React from 'react'
import './Drop.css'

const Drop = (props) => {
    return (
        <div className="wrapperDrop" onClick={props.onClick}>
            <p>⤓</p>
        </div>
    )
}

export default Drop
