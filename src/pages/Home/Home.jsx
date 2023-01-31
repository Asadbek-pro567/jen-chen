import React from 'react'
import Buyurtma from '../../components/Buyurtma/Buyurtma'
import Fact from '../../components/Facts/Fact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import JenChen from '../../components/JenChenTavsiya/JenChen'
import JenshenFarqi from '../../components/JenshenFarqi/JenshenFarqi'
import Turlari from '../../components/Turlari/Turlari'

function Home() {
  return (
    <div>
        <Header/>
        <Buyurtma/>
        <Turlari/>
        <JenshenFarqi/>

        <JenChen/>

        <Fact />
        <Footer />
    </div>
  )
}

export default Home