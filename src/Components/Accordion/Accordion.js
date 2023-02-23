import { useState } from 'react'
import style from './Accordion.module.css'
import {questions} from '../ConstData/ConstData'


export default function Accordion(){
    const[data,setData]=useState(questions)
    const[show,setShow]=useState(false)

    const handleShow=()=>{
        setShow(!show)
    }
    return(
        <div className={style.wrapper}>
            <section className={style.container}>
                <h1>Accordion </h1>
         {
            data.map((x)=>{
                return(
                    <>
                    <div className={style.question} key={x.id}>
                        <h3>{x.question}</h3>
                       <button onClick={handleShow}> { show ? '➖' : '➕'}</button>  
                    </div>
                    {
                        show ?  <p className={style.answer}>{x.answer} </p> : ''
                    }
                   
                    </>
                )
            })
         }
         </section>
        </div>
    )
}