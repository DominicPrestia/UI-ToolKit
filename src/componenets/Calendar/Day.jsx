import React from 'react'
import style from './day.module.css'

const Day = ({ col, isSelected }) => {

  const getClassName = () => {
    if (col.isHovered) {
      if (col.firstPos) return `${style.topContainer} ${style.first}`;
      if (col.endPos) return `${style.topContainer} ${style.last}`;
      return `${style.topContainer} ${style.active}`;
    }
    return style.topContainer;
  };


  return (
    <div className={getClassName()}>
      <div >
        {col.day}
      </div>
    </div>
  )
}

export default Day