import React from 'react'
import { AboutCompany } from '../../assets/data/Data'
import './About.scss'
import Uy from '../../assets/img/katta__uycha.png'

function About() {
  return (
    <>
    <div className='about'>
        <div className="containerrr">
            <div id='about'>
                {
                    AboutCompany?.map((e,i)=>(
                        <li>
                            <h2>{e.title_uz}</h2>
                            <p>{e.text_uz}</p>
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