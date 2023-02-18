import React from 'react'
import s from './model.module.css'
function ModelCompunent({rander , titel , onClose , isOpen}) {
  return (
    <div className={s.model}
      style={{
        display: isOpen ? 'block' : 'none'
      }}
      
      onClick={(e) => {
        if (e.target.className === s.model) {
         
          onClose()
        }
      }}
    >
      <h1 className={ s.model_titel}>{titel}</h1>
        {/* <button type='button' onClick={onClose} className={s.floating_button}>➕</button> */}
      
      <div className={ s.model_content}>{rander()}</div>  
        
    </div>
  )
}

export default ModelCompunent