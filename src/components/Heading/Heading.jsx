import React from 'react'
import './Heading.css'

const Heading = (props) => {
    return (
        <div>
            <h1>{props.big} <span>{ props.small }</span></h1>
        </div>
    )
}

export default Heading
