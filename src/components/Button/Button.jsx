import React from 'react'
import "./Button.css"
import IconArrow from '../icon/Arrow'

const Button = ({ onClick, ...props }) => {
    return (
        <button type="button" className="primary onClick={onClick} {...props}">
            {props.text}
            <IconArrow color="white" />
        </button>
    )
}

export default Button
