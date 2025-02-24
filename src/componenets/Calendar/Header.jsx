import React from 'react'
import style from './header.module.css'


const Header = ({setMonth, setYear}) => {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().toLocaleString('default', {month:'long'});
    const currentDay = new Date().toLocaleString('default', {day:'numeric'});
    const fullDate = new Date().toLocaleDateString('default', {month:'long', day:'numeric', year:'numeric'})


    console.log("Current Year: ", currentYear)
    console.log("Current Month: ", currentMonth)
    console.log("Current Day: ", currentDay)
    console.log("Full Date: ", fullDate)

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