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
          <h5 className="text-center"> There will be 3 latest bootstrap cards here showing routes :)</h5>
        </div>
      </BodyBackground>
    </React.Fragment>
  )
}

export default Home

