import React, { useContext } from 'react'
import { Question } from '../../assets/data/Data'
import { Context } from '../Context/Context'
import './Ildiz.css'

function Ildiz() {
    const {language, setLanguage} = useContext(Context)

  return (
    <>
    <div className='ildiz__container'>
        <div className="ildiz__inner">
            <div className="ildiz__text">
                {
                    Question?.map((e,i)=>(
                        <>
                        <h3>{e[`title_${language}`]}</h3>
                        <p>{e[`text_${language}`]}</p>
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