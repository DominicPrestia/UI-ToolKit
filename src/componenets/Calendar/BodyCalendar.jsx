import React from 'react'
import style from './bodyCalendar.module.css'

const BodyCalendar = ({month, year}) => {

    const days = Array.from({ length: 7 }, (value, i) => Array.from({ length: 6 }, (_, i2) => i2 + 1))

    const date = new Date(year,month,1);
    const lastDay = new Date(year, month + 1, 0);

    console.log("First Day: ", date.getDate())
    console.log("Total Days: ", lastDay.getDate())
    console.log("Date: ", date)
    console.log("Last Date: ", lastDay)


    return (
        <div className={style.topContainer}>
            {days.map((dayOfWeek, index) => {
                return (
                    <div className={style.column}> {dayOfWeek.map((day, i) => {
                        return <div className={style.row}>{day}</div>
                    })}
                    </div>
                )
            })}
        </div>
    )
}

export default BodyCalendar