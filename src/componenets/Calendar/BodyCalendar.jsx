import React, { useEffect, useState, } from 'react'
import style from './bodyCalendar.module.css'
import Day from './Day';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const BodyCalendar = ({ month, year }) => {

    const [calendarData, setCalendarData] = useState([])
    const [isSelected, setIsSelected] = useState(false);
    const [dateSelection, setDateSelection] = useState({})
    const pickRange = 6;

    const handleMouseOver = (data) => {

        setCalendarData((prevData) => {
            return prevData.map((dayOfweek) => {
                return dayOfweek.map((day) => {
                    let startPos = data.id
                    let endPos = data.id + pickRange
                    if (day.id >= startPos && day.id <= endPos) {
                        if (startPos === day.id) {
                            return { ...day, isHovered: true, firstPos: true };
                        } else if (endPos === day.id) {
                            return { ...day, isHovered: true, endPos: true };
                        } else {
                            return { ...day, isHovered: true };
                        }

                    } else {
                        return day;
                    }
                }
                )
            })
        })
    }

    const handleMouseOut = (data) => {

        setCalendarData((prevData) => {
            return prevData.map((dayOfweek) => {
                return dayOfweek.map((day) => {
                    let startPos = data.id
                    let endPos = data.id + pickRange
                    if (day.id >= startPos && day.id <= endPos) {
                        if (startPos === day.id) {
                            return { ...day, isHovered: false, firstPos: false };
                        } else if (endPos === day.id) {
                            return { ...day, isHovered: false, endPos: false };
                        } else {
                            return { ...day, isHovered: false };
                        }
                    } else {
                        return day;
                    }
                })
            })
        })
    }

    const handleOnClick = (data) => {

        console.log(data);
        console.log(calendarData);

        calendarData.map((week) => {
            return week.map((day) => {
                let startPos = data.id
                let endPos = data.id + pickRange
                if(day.id === startPos){
                    console.log("In Start Pos")
                    setDateSelection((prevValue) => {
                    return {...prevValue, startDate: day.day}
                    })
                }else if(day.id === endPos){
                    console.log("END POS ID: ", day.day)
                    setDateSelection((prevValue) => {
                        return {...prevValue, endDate: day.day}
                        })
                }
            })
        })
    }

    useEffect(() => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
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

        const newCalendarData = Array.from({ length: 6 }, (_, y) =>
            Array.from({ length: 7 }, (_, x) => {
                pos++;
                return calculateDay(firstDay, x, pos, lastDay);
            })
        );

        const newDateSelection = {
            startDate: 0,
            endDate:0,
        }


        setDateSelection(newDateSelection)
        setCalendarData(newCalendarData)

    }, [month, year])

    console.log(dateSelection)

    return (
        <div className={style.topContainer}>
            {calendarData?.map((row, y) => {
                return (
                    <div key={y} className={style.column}>
                        {row.map((col, x) => {
                            return (
                                <div key={x}
                                    onMouseOver={() => handleMouseOver(col)} onMouseOut={() => handleMouseOut(col)}
                                    onClick={() => handleOnClick(col)}
                                    className={`${style.row}`}>

                                    <Day
                                        col={col}
                                    />

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