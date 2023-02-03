import React, { useContext } from 'react'
import { AboutCompany } from '../../assets/data/Data'
import './About.scss'
import Uy from '../../assets/img/katta__uycha.png'
import { Context } from '../Context/Context'

function About() {
    const {language, setLanguage} = useContext(Context)
  return (
    <>
    <div className='about'>
        <div className="containerrr">
            <div id='About Company'>
                {
                    AboutCompany?.map((e,i)=>(
                        <li key={i}>
                            <h2>{e[`title_${language}`]}</h2>
                            <p>{e[`text_${language}`]}</p>
                        </li>
                    ))
                }
                <img src={Uy} alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About