import React from 'react'
import style from './xbutton.module.css'

const Xbutton = ({ children, onClick, variant = "primary" }) => {
    return (
        <button className={style[variant]} onClick={onClick}>
            {children}
        </button>
    )
}

export default Xbutton