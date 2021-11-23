import React, {useRef} from 'react'
import './TextInput.css'

const TextInput = (ref, placeholder) => {
    return (
        <input ref={ref} placeholder={placeholder} />
    )
}

export default TextInput
