import React from 'react'
import style from './header.module.css'


const Header = () => {
    return (
        <div className={style.topContainer}>
            <div className={style.leftHeader}>
                <div>Month</div>
                <div>Year</div>
            </div>
            <div className={style.rightHeader}>
                <div>{'<'}</div>
                <div>{'>'}</div>
            </div>
        </div>
    )
}

export default Header