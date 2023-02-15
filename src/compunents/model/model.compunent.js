import React from 'react'
import s from './model.module.css'
function ModelCompunent({rander , titel , onClick}) {
  return (
    <div className={s.wrapper}>
      <div className={s.nav}>
      <h1>{titel}</h1>
        <button type='button' onClick={onClick} className={s.floating_button}>➕</button>
        </div>
      {rander()}
    </div>
  )
}

export default ModelCompunent