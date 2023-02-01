import React from 'react';
import './Footer.css';
// import footMainBack from '../../assets/img/footMainBack2.png';
import footerImage from '../../assets/img/footerImage.png';
import logo from '../../assets/img/logo.png';

const Footer = () => {
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
                        <div className="component"><a href="#about">KOMPANIYA HAQIDA</a></div>
                        <div className="component"><a href="#faktlar">FAKTLAR</a></div>
                        <div className="component"><a href="#mahsulot">MAHSULOT</a></div>
                    </div>
                    <div className="footer__form">
                        <form action="#" method='post' className="form">
                            <div className="form__title">Formani toʻldiring, mutaxascislardan bepul konsultatsiya oling va chegirmaga ega boling</div>
                            <input type="text" placeholder='Ismingiz' />
                            <input type="text"  placeholder='raqam' />
                            <button type='submit'>Buyurtma berish</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Footer;