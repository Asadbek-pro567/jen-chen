import React from 'react'
import './Turlari.css'
import turlari from '../../assets/img/uy.png'
import jenshen from '../../assets/img/jenshen.png'
function Turlari() {
    return (
        <div className='turlari'>
            <div className="mycontainer">
                <div className="js">
                    <img src={turlari} alt="" />
                    <img src={jenshen} alt="" className='poa' />
                    <img src={turlari} alt="" />
                    <img src={jenshen} alt="" className='po' />
                    <h2 className='h2'>Oddiy jen shen 1 199 000</h2>
                    <h2 className='h21'>Qizil jen shen 1 199 000</h2>
                </div>

            </div>
        </div>
    )
}

export default Turlari