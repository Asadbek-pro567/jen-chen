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
    if(el.tel.value.length == 12 && el.namee.value.length > 2 ){
      fetch('https://638208329842ca8d3c9f7558.mockapi.io/get-zapros', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json', // qysi formatta yuborish
          'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
          'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
        },
        body: JSON.stringify({
          name: el.namee.value,
          tel: parseInt(el.tel.value)
        })
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
      e.target.elements.namee.value = ''
      e.target.elements.tel.value = '998'
      el.namee.style.border = '2px solid green'
      el.tel.style.border = '2px solid green'
      alert('Murojatingiz qabul qilindi. Tez orada siz bn boglanamiz')
    }else{
      el.namee.style.border = '2px solid red'
      el.tel.style.border = '2px solid red'
    }
  }

  return (
    <div>
      <div className="mycontainer">
        <div className="Buyurtma" id='zakaz'>

          <div className="buyurtma">
            <form action="#" onSubmit={formReg}>
              {
                Btn?.map((e, i) => (
                  <h2>{e[`title_${language}`]}</h2>
                ))
              }
              {
                Consultation?.map((e, i) => (
                  <h4>{e[`text_${language}`]}</h4>
                ))
              }
              <input type="text" name='namee' placeholder='Ism' />
              <input type="text" name='tel' defaultValue={+998} />
              {
                Btn?.map((e, i) => (
                  <a href="#">
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
                  <h1 className='chegirma'>{e[`sale_${language}`]}</h1>
                  <h1 className='oldingi'><h1>1 399 000</h1></h1>
                  <h1 className='narx'><h1>1 199 000</h1></h1>
                  <h2 className='foyda'><h4>{e[`sale_${language}`]}<span>200 000</span></h4></h2>
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