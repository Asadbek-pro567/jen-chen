import React from 'react'
import './JenChen.css'
import { ShouldDrink } from '../../assets/data/Data'

function JenChen() {
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
                                        <li>{item.text_uz}</li>
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