import React from 'react'
import './Turlari.css'
import turlari from '../../assets/img/uy.png'
import jenshen from '../../assets/img/jenshen.png'
function Turlari() {
    return (
        <div className='turlari' id='mahsulot'>
            <div className="mycontainer">
                <div className="js">
                    <ul className="uy">
                        <li>
                            <img src={jenshen} alt="" />
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