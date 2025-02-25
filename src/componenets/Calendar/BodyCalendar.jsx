import React, { useState } from 'react'
import style from './bodyCalendar.module.css'

const BodyCalendar = ({ month, year }) => {

    const calendarDimensions = Array.from({ length: 6 }, (value, i) => Array.from({ length: 7 }, (_, i2) => i2 + 1))
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let position = 0;

    console.log("First Day: ", firstDay.getDate())
    console.log("First Day: ", firstDay.getDay())
    console.log("Total Days: ", lastDay.getDate())
    console.log("Date: ", firstDay)
    console.log("Last Date: ", lastDay)

    const handleFirstDay = (startDay, doyOfWeek, row, endDay) => {
        const firstDay = startDay;
        const lastDay = endDay;
        const i = doyOfWeek;
        const index = row;

        let content;

        console.log("TEST: ", firstDay.getMonth())

        if (firstDay.getDay() === i && firstDay.getMonth() <= lastDay.getMonth()) {
            content = <div key={i} className={style.row}>
                {console.log("HIT")}
                {firstDay.getDate()}
            </div>
            firstDay.setDate(firstDay.getDate() + 1);
        } 
        // else if (firstDay.getDate() === lastDay.getDate()){
        //     content = <div key={i} className={style.row}>
        //        {firstDay.getDate()}
        //     </div>     
        // }
        else {
            content = <div className={style.row}> NO </div>
        }




        return content;
    }


    return (
        <div className={style.topContainer}>
            {calendarDimensions.map((dayOfWeek, index) => {
                return (
                    <div className={style.column}>
                        {dayOfWeek.map((day, i) => {
                            position++;
                            return (
                                <>
                                    {handleFirstDay(firstDay, i, index, lastDay)}</>
                            )
                        })}
                    </div>)
            })
            }
        </div>
    )
}

export default BodyCalendar