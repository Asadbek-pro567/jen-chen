import React from 'react'
import './Buyurtma.scss'
import mikr from '../../assets/img/KARNAY.png'
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
                <h1 className='oldingi'><h1>1 399 000</h1></h1>
                <h1 className='narx'><h1>1 199 000</h1></h1>
                <h2 className='foyda'><h4>foyda <span>200 000</span></h4></h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Buyurtma