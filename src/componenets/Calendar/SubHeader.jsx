import React from 'react'
import style from './subHeader.module.css'

const SubHeader = () => {

    const subHeaderValues = ["S", "M", "T", "W", "T", "F", "S"]

    return (
        <div className={style.topContainer}>
            {subHeaderValues.map((value, index) => {return (
                <div className={style.title}>{value}</div>
            )})}
        </div>
    )
}

export default SubHeader