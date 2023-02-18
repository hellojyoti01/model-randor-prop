import React from 'react'
import { useState } from 'react'
import s from './home.module.css'
import ModelCompunent from '../../../compunents/model/model.compunent'
import FromCompunents from '../../../compunents/from/from.compunents'
function HomePage() {
    const [isAddStarModelOpen, setIsAddStarModelOpen] = useState(false)
    const handelModal = () => {
        // console.log(this,"This Value")
        setIsAddStarModelOpen(!isAddStarModelOpen)
    }
  return (
      <div className={s.wrapper}>
          <div className={s.container}>
              
        <ModelCompunent
          rander={() => <FromCompunents />}
          onClose={handelModal}
          titel={`Create A Model`}
          isOpen={ isAddStarModelOpen}
        />
        <button type='button'
          onClick={handelModal}
          className={s.floating_button}
          style={{ display: isAddStarModelOpen ? "none" : "block" }}
        >➕</button>
          </div>
    </div>
  )
}

export default HomePage



//s l  i 