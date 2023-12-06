import React from 'react'
import {NavLink} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

const SidePanel = () => {
  return (
    <>
     
     <div className="container sidePanel">
     <ListGroup variant="flush">
      <ListGroup.Item> <NavLink  to='/seller-homepage'>Home</NavLink> </ListGroup.Item>
      <ListGroup.Item> <NavLink to='/add-comapny-detailes'>Add Company</NavLink> </ListGroup.Item>
      <ListGroup.Item> <NavLink to="/comapny-detailes">Your Company Deatils</NavLink> </ListGroup.Item>
      <ListGroup.Item> <NavLink to='/add-product'>Add Product</NavLink></ListGroup.Item>
      <ListGroup.Item> <NavLink>Your Product</NavLink> </ListGroup.Item>

    </ListGroup>
     </div>

 
    </>
  )
}

export default SidePanel