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
              <li> <a href="#"> Kompaniya haqida </a></li>
              <li> <a href="#"> FAKTLAR </a></li>
              <li> <a href="#"> MAHSULOT </a></li>
            </ul>
            <select className='nav__select'>
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
            <button className='nav__btn'>
              <p><a href="#">BUYURTMA BERISH</a></p>
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
              <a href="#">BUYURTMA BERISH</a>
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