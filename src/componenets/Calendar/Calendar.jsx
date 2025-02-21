import React from 'react'
import style from './calendar.module.css'
import Header from './Header'

const Calendar = () => {
  return (
    <div className={style.topContainer}>
        <Header/>
    </div>
  )
}

export default Calendar