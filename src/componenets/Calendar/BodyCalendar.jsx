import React from 'react'
import style from './bodyCalendar.module.css'

const BodyCalendar = () => {

    const days = Array.from({ length: 6 }, (value, i) => Array.from({ length: 7 }, (_, i2) => i2 + 1))

    console.log("days array: ", days)

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