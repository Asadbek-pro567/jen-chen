import React, { useContext } from 'react';
import './Footer.css';
import footerImage from '../../assets/img/footerImage.png';
import logo from '../../assets/img/logo.png';
import { Nav, Order } from '../../assets/data/Data';
import { Context } from '../Context/Context';

const Footer = () => {
    const {language, setLanguage} = useContext(Context)
    return (
        <div  className='Footer'>
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
                        <form action="#" method='post' className="form">
                            {
                                Order?.map((e,i)=>(
                                    <>
                                    <div key={i} className="form__title">{e[`text_${language}`]}</div>
                                    <input key={i} type="text" placeholder='Ismingiz' />
                                    <input key={i} type="text"  placeholder='raqam' />
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