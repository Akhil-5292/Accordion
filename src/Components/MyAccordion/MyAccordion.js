import { useState } from 'react'
import style from './MyAccodion.module.css'

export default function MyAccordion({question,answer}){
    const[show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
    return(
        <>
        <div className={style.question}>
            <h3>{question}</h3>
           <button onClick={handleShow}> { show ? '➖' : '➕'}</button>  
        </div>
        {
            show ?  <p className={style.answer}>{answer} </p> : ''
        }
       
        </>
    )
}