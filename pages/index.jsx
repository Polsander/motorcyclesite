import React from 'react'

import withSession from '../lib/session'

import Navbar from '../components/Navbar/Navbar'
import HeaderText from '../components/Home/HeaderText'
import BodyBackground from '../components/Home/BodyBackground'
import RouteSearch from '../components/Home/RouteSearch'


const Home = (props) => {


  return (
    <React.Fragment>
      <Navbar user={props.user} />
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

  export const getServerSideProps = withSession(async function ({req,res}) {
    const user = req.session.get('user');

    if (!user) {
      return {props:{}}
    }
    console.log(user);
    return {props:{user}}
  })



export default Home

