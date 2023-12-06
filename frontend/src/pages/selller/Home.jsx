import React from 'react'
import SidePanel from './sidePanel'

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
     <SidePanel/>
        </div>
        <div className="col-sm-8">
        <div className="text-center mt-5">Seller HomePage</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home