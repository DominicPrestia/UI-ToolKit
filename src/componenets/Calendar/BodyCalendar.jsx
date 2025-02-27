import React, { useState } from 'react'
import style from './bodyCalendar.module.css'
import Day from './Day';

const BodyCalendar = ({ month, year }) => {

    const calendarDimensions = Array.from({ length: 6 }, (value, i) => Array.from({ length: 7 }, (_, i2) => i2 + 1))
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const pickRange = 7;

    const calculateDay = (startDay, doyOfWeek, endDay) => {
        const firstDay = startDay;
        const lastDay = endDay;
        const i = doyOfWeek;

        let content;

        if (firstDay.getDay() === i && firstDay.getMonth() <= lastDay.getMonth()) {
            content = firstDay.getDate()

            firstDay.setDate(firstDay.getDate() + 1);
        }
        else if (firstDay.getDay() !== i && firstDay.getMonth() <= lastDay.getMonth()) {
            const minusDays = firstDay.getDay() - i;
            const prevMonthDay = new Date(firstDay)

            prevMonthDay.setDate(firstDay.getDate() - minusDays);

            content = prevMonthDay.getDate()
        }
        else {
            content = firstDay.getDate()
            firstDay.setDate(firstDay.getDate() + 1)
        }
        return content;
    }

    const handleMouseOver = (y,x) => {
        console.log("Mouse Over",y, ", ", x)
    }

    console.log("RENDER")

    return (
        <div className={style.topContainer}>
            {calendarDimensions.map((dayOfWeek, y) => {
                return (
                    <div key={y} className={style.column}>
                        {dayOfWeek.map((day, x) => {
                            
                            return (
                                <div onMouseOver={()=>handleMouseOver(y, x)}  key={x} className={style.row}>
                                    <Day day={calculateDay(firstDay,x,lastDay)}/>
                                </div>
                            )
                        })}
                    </div>)
            })
            }
        </div>
    )
}

export default BodyCalendar