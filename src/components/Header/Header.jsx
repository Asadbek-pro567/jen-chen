import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import img from '../../assets/img/img.png'
function Header() {

  const [ menu, setMenu ] = useState(false);
  return (
    <div className='Header'>
      <div className="mycontainer">
        <div className="nav">
          <img src={logo} alt="" />
          <div className="nav__right">
            <ul className='change_none nav__ul'>
              <li> <a href="#"> Kompaniya haqida </a></li>
              <li> <a href="#"> FAKTLAR </a></li>
              <li> <a href="#"> MAHSULOT </a></li>
            </ul>
            <select className='change_none none'>
              <option value="">Kompaniya haqida</option>
              <option value="">FAKTLAR </option>
              <option value="">MAHSULOT </option>
            </select>
            <select className='change_select nav__select'>
              <option value="Uz">Uz</option>
              <option value="Ru">Ru</option>
              <option value="Eng">Eng</option>
            </select>
            <button className='change_none nav__btn'>
              <p><a href="#">BUYURTMA BERISH</a></p>
            </button>
             
            <div onClick={() => setMenu(!menu)} className="menu">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="hero__left">
            <div className="hero__info">
              <h4>
                100% tabiiy
              </h4>
              <h1>
                Koreya qizil jenshen 
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
      <div style={menu === false ? {display: 'none'} : {zIndex: 999}} className="navbr__colapse">
          <ul className='change_ul'>
              <li> <a href="#"> Kompaniya haqida </a></li>
              <li> <a href="#"> FAKTLAR </a></li>
              <li> <a href="#"> MAHSULOT </a></li>
            </ul>
            <button className='nav__btn'>
              <p><a href="#">BUYURTMA BERISH</a></p>
            </button>
        </div>
    </div>
  )
}

export default Header