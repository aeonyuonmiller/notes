import React from 'react'
import { Link } from "react-router-dom";
import './Link.css'

const Linker = (props, { onClick }) => {
    // console.log(props)

    return (
        <Link className="underline" onClick={onClick} to={props.to}>
            {props.text}
        </Link>
    )
}

export default Linker
