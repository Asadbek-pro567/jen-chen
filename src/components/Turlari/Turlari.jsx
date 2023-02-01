import React from 'react'
import './Turlari.css'
import turlari from '../../assets/img/uy.png'
import jenshen from '../../assets/img/jenshen.png'
import Uy from '../../assets/img/uy.png'

function Turlari() {
    return (
        <div className='turlari' id='mahsulot'>
            <div className="myycontainer">
                <div className="js">
                    <ul className="uyyyyy">
                        <li>
                            <img src={jenshen} alt="" className='uy2'/>
                            <h2>Qizil jen shen 1 199 000</h2>
                        </li>
                        <li>
                            <img src={jenshen} alt="" />
                            <h2>Qizil jen shen 1 199 000</h2>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Turlari