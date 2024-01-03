import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';
const MessageBox = ({transaction_id}) => {
  return (
   
<>
<div className="container d-flex 100-vh justify-content-center align-items-center bg-light" style={{position:"absolute",top:"30%",right:"0",left:"0",width:"30%"}} >
    <div className='d-flex  p-2 flex-column jsutiy-content-center mt-5 ' style={{height:"50vh"}}>
    <h2 className=' mt-3' >
     Order SuccessFully Placed
    </h2>
   <span className='fs-4  mt-3'><strong>transaction_id: </strong>{transaction_id}</span>
  <div className="text-center mt-4">
  <NavLink to="/" className='  text-dark w-50 SignUpBtn ' style={{padding:"10px 30px"}}>Shop more</NavLink>
  </div>
    </div>
</div>

</>
  )
}

export default MessageBox