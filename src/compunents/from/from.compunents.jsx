import React from 'react'
import {
    useState, useEffect} from 'react'
import s from './from.module.css'
function FromCompunents() {

    const [value , setValue ]=useState({
        name: '',
        roolNo: '',
        temprature: '',
        class: '',
        age: '',
        state: '',
        dob: ''
    })

    const handelSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault()
        localStorage.setItem("From=>" , JSON.stringify(value))
         alert('From Sumited')
        
    }
    const handelChange = (e) => {
        e.stopPropagation()
        console.log(e)
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }
  return (
      <div className={s.warppaer} onChange={handelChange} >
         {"Hello"} {/* <label htmlFor='name' >Name</label>
          <input type='text' id='name' name='name' required min={20} max={45} value={value.name} />
          <label htmlFor='roolNo' >RoolNo</label>
          <input type='number' id='roolNo' name='roolNo' required min={1} max={45} value={ value.roolNo} />
          <label htmlFor='temprature' >Temprature</label>
          <input type='text' id='temprature' name='temprature' required min={20} max={45} value={value.temprature} />
          <label htmlFor='class' >Class</label>
          <input type='text' id='class' name='class' required min={20} max={45} value={ value.class} />
          <label htmlFor='age' >Age</label>
          <input type='text' id='age' name='age' required min={20} max={45} value={ value.age} />
          <label htmlFor='state' >State</label>
          <input type='text' id='state' name='state' required min={20} max={45} value={ value.state} />
          <button type='submit' onClick={handelSubmit}>Submit</button> */}
    </div>
  )
}

export default FromCompunents

//name , roolNo , temprature , class , age , state , DoB