import React from 'react';
import './Fact.css';
import factCard from '../../assets/img/factCard.png';

const Fact = () => {
    return (
        <div className='Fact'>
            <div className="mycontainer">
                <div className="fact__title">Faktlar sonlarda</div>
                <div className="fact__cards">
                    <div className="fact__row">
                        <div className="fact__card">
                            <div className="fact__image">
                                <img src={factCard} alt="" />
                            </div>
                            <div className="fact__content">
                                <div className="content__price">
                                    100
                                </div>
                                <div className="content__info">
                                    100 ga yaqin kasalliklarni
                                    oldini olish va davolashda
                                    qollaniladi
                                </div>
                            </div>
                        </div>
                        <div className="fact__card">
                            <div className="fact__image">
                                <img src={factCard} alt="" />
                            </div>
                            <div className="fact__content">
                                <div className="content__price">
                                    1.3 <p id="price_desc">mlrd</p>
                                </div>
                                <div className="content__info">
                                    1,3 mlrd xitoyliklar 
                                    jenshenni inson uchun 
                                    eng foydali mahsulot 
                                    deb hisoblashadi
                                </div>
                            </div>
                        </div>
                        <div className="fact__card">
                            <div className="fact__image">
                                <img src={factCard} alt="" />
                            </div>
                            <div className="fact__content">
                                <div className="content__price">
                                    100
                                </div>
                                <div className="content__info">
                                    Jenshen o'simligi
                                    100 yilgacha
                                    umr ko'radi va yaxshi mahsulot
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Fact;