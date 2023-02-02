import React, { useContext } from 'react'
import './Buyurtma.scss'
import mikr from '../../assets/img/KARNAY.png'
import { Btn, Consultation, Order } from '../../assets/data/Data'
import { Context } from '../Context/Context'
function Buyurtma() {
  const { language, setLanguage } = useContext(Context)
  return (
    <div>
      <div className="mycontainer">
        <div className="Buyurtma" id='zakaz'>

          <div className="buyurtma">
            {
              Btn?.map((e, i) => (
                <h2 key={i}>{e[`title_${language}`]}</h2>
              ))
            }
            {
              Consultation?.map((e, i) => (
                <h4 key={i}>{e[`text_${language}`]}</h4>
              ))
            }
            <input type="text" placeholder='Ism' />
            <input type="text" placeholder='+998' />
            {
              Btn?.map((e, i) => (
                <a href="#" key={i}>
                  <button>
                    {e[`title_${language}`]}
                  </button>
                </a>
              ))
            }
          </div>
          <div className="mikrofon">
            <img src={mikr} alt="" className='mikr' />
            {
              Order?.map((e,i)=>(
                <>
                <h1 key={i} className='chegirma'>{e[`sale_${language}`]}</h1>
                <h1 key={i} className='oldingi'><h1>1 399 000</h1></h1>
                <h1 key={i} className='narx'><h1>1 199 000</h1></h1>
                <h2 key={i} className='foyda'><h4>{e[`sale_${language}`]}<span>200 000</span></h4></h2>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buyurtma