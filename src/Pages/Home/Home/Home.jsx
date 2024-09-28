import React from 'react'
import Banner from '../Banner/Banner'

import Trip from '../../Trip/Tripzone/Trip'
import NextAdventure from '../../NextAdventure/NextAdventure'
import AdventureTravel from '../../AdventureTravel/AdventureTravel'
import Footer from '../../Footer/Footer'

console.log(import.meta.env.VITE_APIKEY)

console.log(import.meta.env.VITE_SOME_KEY)

const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <Trip></Trip>
      <AdventureTravel></AdventureTravel>
      <NextAdventure></NextAdventure>
      <Footer></Footer>
  

    </div>
  )
}

export default Home