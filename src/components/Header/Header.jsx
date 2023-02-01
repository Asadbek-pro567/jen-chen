import React from 'react'

import './Header.scss'
import logo from '../../assets/img/logo.png'
import img from '../../assets/img/header__right.png'
function Header() {
  return (
    <div className='Header'>
      <div className="mycontainer">
        <div className="nav">
          <img src={logo} alt="" />
          <div className="nav__right">
            <ul className='nav__ul'>
              <li> <a href="#about"> Kompaniya haqida </a></li>
              <li> <a href="#faktlar"> FAKTLAR </a></li>
              <li> <a href="#mahsulot"> MAHSULOT </a></li>
            </ul>
            <select className='nav__select'>
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
            <a href="#zakaz" className='a'>
                <button className="nav__btn">
                  BUYURTMA BERISH
                </button>
              </a>
          </div>
        </div>

        <div className="hero">
          <div className="hero__left">
            <div className="hero__info">
              <h4>
                100% tabiiy
              </h4>
              <h1>
                Koreya qizil jenshen ichimligi
              </h1>
              <a href="#zakaz" className='a'>
                <button className="nav__btn">
                  BUYURTMA BERISH
                </button>
              </a>
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