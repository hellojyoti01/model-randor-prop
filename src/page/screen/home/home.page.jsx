import React from 'react'
import { useState } from 'react'
import s from './home.module.css'
import ModelCompunent from '../../../compunents/model/model.compunent'
import FromCompunents from '../../../compunents/from/from.compunents'
function HomePage() {
    const [model, setModel] = useState(false)
    const handelModal = () => {
        // console.log(this,"This Value")
         setModel(!model)
    }
  return (
      <div className={s.wrapper}>
          <div className={s.container}>
              
        {model && <ModelCompunent rander={() => <FromCompunents />} onClick={ handelModal} titel={`Create A Model`} />}
              <button type='button' onClick={handelModal.bind(this)} className={ s.floating_button} >➕</button>
          </div>
    </div>
  )
}

export default HomePage