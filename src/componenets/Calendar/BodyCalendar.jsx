import React, { useEffect, useState, } from 'react'
import style from './bodyCalendar.module.css'
import Day from './Day';

const BodyCalendar = ({ month, year }) => {

    const calendarDimensions = Array.from({ length: 6 }, (value, i) => Array.from({ length: 7 }, (_, i2) => i2 + 1))
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    // const [isHovered,setIsHovered] = useState({});
    const [calendarValues, setCalendarValues] = useState([])
    const pickRange = 7;
    let pos = 0;

    const calculateDay = (startDay, doyOfWeek, position, endDay) => {
        const firstDay = startDay;
        const lastDay = endDay;
        const i = doyOfWeek;



        let content;

        if (firstDay.getDay() === i && firstDay.getMonth() <= lastDay.getMonth()) {
            content = {
                id: position,
                day: firstDay.getDate(),
                isHovered: false,
            }

            firstDay.setDate(firstDay.getDate() + 1);
        }
        else if (firstDay.getDay() !== i && firstDay.getMonth() <= lastDay.getMonth()) {
            const minusDays = firstDay.getDay() - i;
            const prevMonthDay = new Date(firstDay)

            prevMonthDay.setDate(firstDay.getDate() - minusDays);

            content = {
                id: position,
                day: prevMonthDay.getDate(),
                isHovered: false,
            }
        }
        else {
            content = {
                id: position,
                day: firstDay.getDate(),
                isHovered: false,
            }
            firstDay.setDate(firstDay.getDate() + 1)
        }
        return content;
    }

    const handleMouseOver = (currentPos, calendarArray) => {
        console.log(currentPos);
        currentPos.isHovered = 5;
    }

    // useEffect(() => {
    //     setCalendarValues(calendarDimensions)
    // }, [])





    // console.log("RENDER", calendarValues)

    return (
        <div className={style.topContainer}>
            {calendarDimensions.map((row, y) => {
                return (
                    <div key={y} className={style.column}>
                        {row.map((col, x) => {
                            pos++
                            //Should exectued calculateDay here for the value of day and pass it down. You should set the value of the location in the array to the day.
                            // each value can be an object: {day:x, hovered:true/false, inCurrentMonth: true/false}
                            calendarDimensions[y][x] = calculateDay(firstDay, x, pos, lastDay)

                            const calValue = calendarDimensions[y][x];

                            // console.log("Calendar Value: ", calValue);
                            // console.log("Calendar Array: ", calendarDimensions)

                            return (
                                <div onMouseOver={() => handleMouseOver(calValue, calendarDimensions)} key={x} className={`${style.row} ${calValue.isHovered ? style.active : ""}`}>
                                    <Day day={calValue.day} />
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