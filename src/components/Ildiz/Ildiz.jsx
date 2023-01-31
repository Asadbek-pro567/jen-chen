import React from 'react'
import { Question } from '../../assets/data/Data'
import './Ildiz.css'

function Ildiz() {
  return (
    <>
    <div className='ildiz__container'>
        <div className="ildiz__inner">
            <div className="ildiz__text">
                {
                    Question?.map((e,i)=>(
                        <>
                        <h3>{e.title_uz}</h3>
                        <p>{e.text_uz}</p>
                        </>
                    ))
                }   
            </div>        
        </div>
    </div>
    </>
  )
}

export default Ildiz