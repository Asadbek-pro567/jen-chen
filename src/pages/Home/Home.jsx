import React from 'react'
import Buyurtma from '../../components/Buyurtma/Buyurtma'
import Header from '../../components/Header/Header'
import Turlari from '../../components/Turlari/Turlari'

function Home() {
  return (
    <div>
        <Header/>
        <Buyurtma/>
        <Turlari/>
    </div>
  )
}

export default Home