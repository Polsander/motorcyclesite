import React from 'react'


import Navbar from '../components/Navbar/Navbar'
import HeaderText from '../components/Home/HeaderText'
import BodyBackground from '../components/Home/BodyBackground'
import RouteSearch from '../components/Home/RouteSearch'

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid">
        <HeaderText />
      </div>
      <BodyBackground>
        <div className="container-fluid mt-5">
          <h2 className="text-center">Find Your Route</h2>
          <RouteSearch/>
        </div>
      </BodyBackground>
    </React.Fragment>
  )
}

export default Home

