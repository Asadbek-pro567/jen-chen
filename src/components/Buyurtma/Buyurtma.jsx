import React, { useContext } from 'react'
import './Buyurtma.scss'
import mikr from '../../assets/img/KARNAY.png'
import { Btn, Consultation, Order } from '../../assets/data/Data'
import { Context } from '../Context/Context'
function Buyurtma() {
  const { language, setLanguage } = useContext(Context)
  const formReg = (e) => {
    e.preventDefault()
    const el = e.target.elements
    fetch('https://638208329842ca8d3c9f7558.mockapi.io/get-zapros', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json', // qysi formatta yuborish
        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
      },
      body: JSON.stringify({
        name: el.name.value,
        tel: parseInt(el.tel.value)
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
    e.target.elements.name.value = ''
    e.target.elements.tel.value = '998'
  }
  return (
    <div>
      <div className="mycontainer">
        <div className="Buyurtma" id='zakaz'>

          <div className="buyurtma">
            <form action="#" onSubmit={formReg}>
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
              <input type="text" name='name' placeholder='Ism' />
              <input type="text" name='tel' placeholder='+998' />
              {
                Btn?.map((e, i) => (
                  <a href="#" key={i}>
                    <button type='submit'>
                      {e[`title_${language}`]}
                    </button>
                  </a>
                ))
              }
            </form>
          </div>
          <div className="mikrofon">
            <img src={mikr} alt="" className='mikr' />
            {
              Order?.map((e, i) => (
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