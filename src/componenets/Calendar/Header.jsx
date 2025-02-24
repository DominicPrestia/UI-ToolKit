import React, { useState } from 'react'
import style from './header.module.css'


const Header = ({ setMonth, setYear }) => {

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2011 + 1 }, (_, i) => currentYear - i);
    const currentMonth = new Date().getMonth();
    const [monthDropDown, setMonthDropDown] = useState(currentMonth);
    const [yearDropDown, setYearDropDown] = useState(currentYear);
     // const currentMonth = new Date().toLocaleString('default', { month: 'long' });
    // const currentDay = new Date().toLocaleString('default', { day: 'numeric' });
    // const fullDate = new Date(2001,1,1);
    // const fullDate = new Date().toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })


    // console.log("Current Year: ", currentYear)
    // console.log("Current Month: ", currentMonth)
    // console.log("Current Day: ", currentDay)
    // console.log("Full Date: ", fullDate)

    // const test = fullDate.getDay();

    // console.log("Day of Week: ", test)



    const handleMonthSelect = (e) => {
        setMonthDropDown(e.target.value);
        // console.log("TEST MONTH: ", monthDropDown);
        setMonth(Number(e.target.value));
    }

    const handleYearSelect = (e) => {
        setYearDropDown(e.target.value);
        setYear(Number(e.target.value));
    }

    return (
        <div className={style.topContainer}>
            <div className={style.leftHeader}>
                <select value={monthDropDown} onChange={handleMonthSelect}>
                    <option value={0}>January</option>
                    <option value={1}>February</option>
                    <option value={2}>March</option>
                    <option value={3}>April</option>
                    <option value={4}>May</option>
                    <option value={5}>June</option>
                    <option value={6}>July</option>
                    <option value={7}>August</option>
                    <option value={8}>September</option>
                    <option value={9}>October</option>
                    <option value={10}>November</option>
                    <option value={11}>December</option>
                </select>

                <select value={yearDropDown} onChange={handleYearSelect}>
                    {years.map((year, index) => (
                        <option key={index}>{year}</option>
                    ))}
                </select>
            </div>
            <div className={style.rightHeader}>
                <div>{'<'}</div>
                <div>{'>'}</div>
            </div>
        </div>
    )
}

export default Header