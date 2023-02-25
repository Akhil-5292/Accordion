import { useState } from 'react'
import style from './Accordion.module.css'
import {questions} from '../ConstData/ConstData'


export default function Accordion(){
    const[data,setData]=useState(questions)
    const[show,setShow]=useState(null)

    const handleShow=(i)=>{
        if(show===i){
      return setShow(null)
        }
        setShow(i)
    }
    return(
        <div className={style.wrapper}>
            <section className={style.container}>
                <h1>Accordion </h1>
         {
            data.map((x,i)=>{
                return(
                    <>
                    <div  className={style.question} key={x.id}>
                        <h3>{x.question}</h3>
                       <button onClick={()=>handleShow(i)}> { show===i ? '➖' : '➕'}</button>  
                    </div>
                    {
                        show ?  <p className={style.answer}>{show===i ?  x.answer : ''} </p> : ''
                    }
                   
                    </>
                )
            })
         }
         </section>
        </div>
    )
}