import React, { useState } from 'react'
import style from './calendar.module.css'
import Header from './Header'
import BodyCalendar from './BodyCalendar'
import SubHeader from './SubHeader'

const Calendar = ({value, onChange}) => {

  const [month, setMonth] = useState();
  const [year, setYear] = useState();


  return (
    <div className={style.topContainer}>
        <Header/>
        <SubHeader/>
        <BodyCalendar/>
    </div>
  )
}

export default Calendar