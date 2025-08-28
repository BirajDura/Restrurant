import React from 'react'
import Items from './Items'
import Contact from './Contact'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <div>
      Welcome to the MoMo Restro.
      here are the features 
      <div>
        <Items/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <OurTeam/>
      </div>
    </div>
  )
}

export default Home
