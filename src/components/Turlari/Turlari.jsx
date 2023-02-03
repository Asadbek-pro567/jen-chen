import React, { useContext } from 'react'
import './Turlari.css'
import turlari from '../../assets/img/uy.png'
import jenshen from '../../assets/img/jenshen.png'
import Uy from '../../assets/img/uy.png'
import { Context } from '../Context/Context'
import { Product } from '../../assets/data/Data'

function Turlari() {
  const { language, setLanguage } = useContext(Context)
    return (
        <div className='turlari' id='Product'>
            <div className="myycontainer">
                <div className="js">
                    <ul className="uyyyyy">
                        {
                            Product?.map((e,i)=>(
                                <>
                                <li key={i}>
                                    <img src={jenshen} alt="" className='uy2'/>
                                    <h2>{e[`title_${language}`]} {e.price}</h2>
                                </li>
                                </>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Turlari