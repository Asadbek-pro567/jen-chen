import React, { useContext } from 'react'
import './JenChen.css'
import { ShouldDrink } from '../../assets/data/Data'
import { Context } from '../Context/Context'

function JenChen() {
    const {language, setLanguage} = useContext(Context)
  return (
    <>
    <div className='containercha'>
        <div className='should__drink'>
            <div className='should__drink__inner'>
                <div>
                    {
                        ShouldDrink?.map((e,i)=>(
                            <>
                            <h2>{e.title_uz}</h2>
                            <ul>
                                {
                                    e.cause.map((item)=>(
                                        <li>{item[`text_${language}`]}</li>
                                    ))
                                }
                            </ul>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default JenChen