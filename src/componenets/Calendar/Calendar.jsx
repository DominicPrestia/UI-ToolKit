import React, { useState } from 'react'
import style from './calendar.module.css'
import Header from './Header'
import BodyCalendar from './BodyCalendar'
import SubHeader from './SubHeader'

const Calendar = ({value, onChange}) => {

  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());


  console.log("MONTH: ", month);
  console.log("YEAR: ", year);

  return (
    <div className={style.topContainer}>
        <Header setMonth={setMonth} setYear={setYear}/>
        <SubHeader/>
        <BodyCalendar month={month} year={year}/>
    </div>
  )
}

export default Calendar