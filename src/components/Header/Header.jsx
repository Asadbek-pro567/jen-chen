import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import img from '../../assets/img/img.png'
function Header() {
  return (
    <div className='Header'>
      <div className="mycontainer">
        <div className="nav">
          <img src={logo} alt="" />
          <div className="nav__right">

            <ul className='nav__ul'>
              <li>Kompaniya haqida</li>
              <li>FAKTLAR</li>
              <li>MAHSULOT</li>
            </ul>
            <select className='nav__select'>
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
            <button className='nav__btn'>
              <p>BUYURTMA BERISH</p>
            </button>
          </div>
        </div>
        <div className="hero">
          <div className="hero__left">
            <div className="hero__info">
              <h4>
                100% tabiiy
              </h4>
              <h1>
                Koreya qizil jenshen <br />
                ichimligi
              </h1>
              <button className="nav__btn">
              BUYURTMA BERISH
              </button>
            </div>
          </div>
          <div className="hero__right">
            <img src={img} alt="" className='img'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header