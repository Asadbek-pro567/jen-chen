import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import img from '../../assets/img/img.png'
import { Context } from '../Context/Context';
import { Btn, Nav, Slider } from '../../assets/data/Data';
function Header() {

  const [ menu, setMenu ] = useState(false);
  const {language, setLanguage} = useContext(Context)
  
  const langu = (e)=>{
    setLanguage(e.target.value)
  }
  window.localStorage.setItem('language', language ? language : 'uz')
  const lan = window.localStorage.getItem('language')
  const [scrol, setScrol] = React.useState(false)
  const offSet = 80;

  const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    if (getTop() > offSet) {
      setScrol(true)
    } else {
      setScrol(false)
    }
  })

  return (
    <>
    <div className='Header'>
      <div className={scrol ? 'active' : ''}>
        <div className='mycontainerrrr'>
          <div className='nav'>
            <a href="#">
            <img src={logo} alt="" />
            </a>
                <div className="nav__right">
                  <ul className='change_none nav__ul'>
                  {
                    Nav?.map((e,i)=>(
                    <>
                      <li> <a href={`#${e.nav_en}`}>{e[`nav_${language}`]}</a></li>
                    </>
                    ))
                  }

                  </ul>
                  <select className='change_none none'>
                  {
                    Nav?.map((e,i)=>(
                    <>
                      <li> <a href={`#${e.nav_en}`}>{e[`nav_${language}`]}</a></li>
                    </>
                    ))
                  }
                  </select>
                  <select className='change_select nav__select' onChange={langu}>
                    <option value="uz" selected={lan == 'uz' ? true : false}>Uz</option>
                    <option value="ru" selected={lan == 'ru' ? true : false}>Ru</option>
                    <option value="en" selected={lan == 'en' ? true : false}>Eng</option>
                  </select>
                  
                  
                  <div onClick={() => setMenu(!menu)} className={menu == true ? 'xxx menu' : 'menu'}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="mycontainerrrr">
        <div className="hero">
          <div className="hero__left">
            <div className="hero__info">
                {
                  Slider?.map((e,i)=>(
                  <div>
                    <h4>
                      {e[`natural`]}% tabiiy
                    </h4>
                    <h1>
                      {e[`title_${language}`]}
                    </h1>
                  </div>
                  ))
                }
                  {
                    Btn?.map((e,i)=>(
                    <button className="nav__btn">
                      <a href="#zakaz">{e[`title_${language}`]}</a>
                    </button>
                    ))
                  }
                </div>
          </div>
          <div className="hero__right">
            <img src={img} alt="" className='img'/>
          </div>
        </div>
      </div>
      <div style={menu === false ? {display: 'none'} : {zIndex: 999}} className="navbr__colapse">
          <ul className='change_ul' onClick={()=>setMenu(!menu)}>
                {
                  Nav?.map((e,i)=>(
                    <li> <a href={`#${e.nav_en}`}>{e[`nav_${language}`]}</a></li>
                  ))
                }
            </ul>
            <button className='nav__btn'>
              {
                Btn?.map((e,i)=>(
                  <p><a href="#zakaz">{e[`title_${language}`]}</a></p>
                ))
              }
            </button>
        </div>
    </div>
    </>
  )
}

export default Header