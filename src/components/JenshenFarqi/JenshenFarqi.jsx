import React, { useContext } from 'react'
import './JenshenFarqi.scss'
import topImg from '../../assets/img/JenshenFarqiTop.png'
import centerImg from '../../assets/img/JenshenFarqiCenter.png'
import bottomImg from '../../assets/img/JenshenFarqiBottom.png'
import { ProductInfo } from '../../assets/data/Data'
import { Context } from '../Context/Context'
import AOS from 'aos';
import 'aos/dist/aos.css';


function JenshenFarqi() {
  const { language, setLanguage } = useContext(Context)
    AOS.init()
  return (
    <div className='JenshenFarqi'>
        <div className="container">
            <div className="jenshenFarqi__items">
                <div className="jenshenFarqi__items-top" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className="itemTop__left">
                        <p>{ProductInfo[0][`text_${language}`]}
                        </p>
                    </div>

                    <div className="itemTop__right">
                        <img src={topImg} alt="" />
                    </div>
                </div>

                <div className="jenshenFarqi__items-center" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className="itemCenter__right">
                        <img src={centerImg} alt="" />
                    </div>

                    <div className="itemCenter__left">
                        <p>{ProductInfo[1][`text_${language}`]}
                        </p>
                    </div>
                </div>

                <div className="jenshenFarqi__items-bottom">
                    <div className="jenshenFarqi__Bottom-info">
                        <div className="itemBottom__left">
                            <p>
                                {ProductInfo[2][`text_${language}`]}
                            </p>
                        </div>

                        <div className="itemBottom__right">
                            <img src={bottomImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JenshenFarqi