import React, { useState } from 'react'
import style from './bodyCalendar.module.css'

const BodyCalendar = ({ month, year }) => {

    const calendarDimensions = Array.from({ length: 6 }, (value, i) => Array.from({ length: 7 }, (_, i2) => i2 + 1))
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let position = 0;

    const outputDays = (startDay, doyOfWeek, row, endDay) => {
        const firstDay = startDay;
        const lastDay = endDay;
        const i = doyOfWeek;
        const index = row;

        let content;

        if (firstDay.getDay() === i && firstDay.getMonth() <= lastDay.getMonth()) {
            content = <div key={i} className={style.row}>
                {firstDay.getDate()}
            </div>
            firstDay.setDate(firstDay.getDate() + 1);
        }
        else if (firstDay.getDay() !== i && firstDay.getMonth() <= lastDay.getMonth()) {

            const minusDays = firstDay.getDay() - i;

            const prevMonthDay = new Date(firstDay)

            prevMonthDay.setDate(firstDay.getDate() - minusDays);

            content = <div key={i} className={style.row}>
                {prevMonthDay.getDate()}
            </div>
        }
        else {
            content = <div className={style.row}>
                {firstDay.getDate()}
            </div>
            firstDay.setDate(firstDay.getDate() + 1)
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
                                    {outputDays(firstDay, i, index, lastDay)}
                                </>
                            )
                        })}
                    </div>)
            })
            }
        </div>
    )
}

export default BodyCalendar