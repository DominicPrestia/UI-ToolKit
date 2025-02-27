import React from 'react'
import style from './day.module.css'

const Day = ({day}) => {
  return (
    <div className={style.topContainer}>{day}</div>
  )
}

export default Day