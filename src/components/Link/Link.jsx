import React from 'react'
import './Link.css'

const Link = (props) => {
    return (
        <a className="underline" href={props.href}>
            {props.text}
        </a>
    )
}

export default Link
