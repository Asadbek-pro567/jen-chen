import React, { useContext } from 'react';
import './Footer.css';
import footerImage from '../../assets/img/footerImage.png';
import logo from '../../assets/img/logo.png';
import { Nav, Order } from '../../assets/data/Data';
import { Context } from '../Context/Context';

const Footer = () => {

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

    const {language, setLanguage} = useContext(Context)
    return (
        <div  className='footer'>
            <div className="mycontainerrr">
                <div className="footer__row">
                    <div className="footer__contact">
                        <div className="contact__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="contact__info">
                            Janubiy Koreyada tayyorlangan haqiqiy 
                            6 yillik qizil jenshen ekstrakti
                        </div>
                        <div className="contact__links">
                            <div className="link telegram">
                                <a href="#"><i className="fa-brands fa-telegram"></i></a>
                            </div>
                            <div className="link instagram">
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="link facebook">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                            </div>
                            <div className="link youtube">
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__components">
                        {
                            Nav?.map((e,i)=>(
                                <div key={i} className="component"><a href={`#${e.nav_en}`}>{e[`nav_${language}`]}</a></div>
                            ))
                        }
                    </div>
                    <div className="footer__form">
                        <form onSubmit={formReg} action="#" method='post' className="form">
                            {
                                Order?.map((e,i)=>(
                                    <>
                                    <div key={i} className="form__title">{e[`text_${language}`]}</div>
                                    <input key={i} name='name' type="text" placeholder='Ismingiz' />
                                    <input key={i} name='tel' type="text"  placeholder='raqam' />
                                    <button key={i} type='submit'>{e[`title_${language}`]}</button>
                                    </>
                                ))
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;