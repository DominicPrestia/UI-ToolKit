import React from 'react'
import style from './xbutton.module.css'

const Xbutton = ({ children, onClick, variant = "primary" , active="" }) => {
    return (
        <button className={`${style[variant]} ${style[active]}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Xbutton