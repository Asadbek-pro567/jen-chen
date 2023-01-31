import React from 'react'
import Buyurtma from '../../components/Buyurtma/Buyurtma'
import Fact from '../../components/Facts/Fact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Turlari from '../../components/Turlari/Turlari'

function Home() {
  return (
    <div>
        <Header/>
        <Buyurtma/>
        <Turlari/>
        <Fact />
        <Footer />
    </div>
  )
}

export default Home