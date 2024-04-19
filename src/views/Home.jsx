import React from 'react'
import HomeContent from '../components/Homecontent/HomeContent'
import HomeTextContent from '../components/Homecontent/HomeTextContent'
import NavbarCommon from '../components/Navbar/NavbarCommon'


const Home = () => {
  return (
    <div>
<NavbarCommon/>
      <HomeContent/>
  
      <HomeTextContent/>
    </div>
  )
}

export default Home
