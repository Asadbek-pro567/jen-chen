import React from 'react'
import './Buyurtma.css'
import mikr from '../../assets/img/mikrofon.png'
function Buyurtma() {
  return (
    <div>
        <div className="mycontainer">
            <div className="Buyurtma" id='zakaz'>
                
            <div className="buyurtma">
                <h2>Buyurtma berish</h2>
                <h4>Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</h4>
                <input type="text" placeholder='Ism' />
                <input type="text" placeholder='+998' />
                <a href="#">
                <button>
                Buyurtma berish
                </button>
                </a>
            </div>
            <div className="mikrofon">
                <img src={mikr} alt="" className='mikr'/>
                <h1 className='chegirma'>Chegirma</h1>
                <h1 className='oldingi'>1 399 000</h1>
                <h1 className='narx'>1 199 000</h1>
                <h2 className='foyda'>foyda 200 000</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Buyurtma