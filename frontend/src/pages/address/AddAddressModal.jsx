import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import axios from 'axios';
const AddAddressModal = ({setShowModal,getAddressList}) => {
    const [auth,setAuth] = useAuth()
  const token  = auth.token
    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
  const AddAddress = async(data) =>{
    try {
        const config =   axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.post('http://localhost:8000/api/address/add-address',data,config)
        setShowModal(false)
        getAddressList();
    } catch (error) {
        console.log(error)
        
    }

  }
  return (
    <>
     <div
      className="modal show"
      style={{ display: 'block', position: 'absolute',top:"30  %" }}
    >
      <Modal.Dialog size='md'>
        <Modal.Header closeButton>
          <Modal.Title><h2  className='text-center'>Add Address</h2> </Modal.Title>
        </Modal.Header>

        <Modal.Body>
         <form action="" className='p-1 modalform' onSubmit={handleSubmit(AddAddress)}>
         <div className="form-group mt-2">
           <label htmlFor="">Street1</label>
           <input type="text" className="form-control" name='street1' {...register("street1",{required:true})} placeholder='street1...' />
          </div>
          <div className="form-group mt-2">
           <label htmlFor="">Street2</label>
           <input type="text" className="form-control" name='street2' {...register("street2",{required:true})} placeholder='street2...'/>
          </div>
          <div className="form-group mt-2">
           <label htmlFor="">city</label>
           <input type="text" className="form-control" name='city' {...register("city",{required:true})} placeholder='city...'/>
          </div>
          <div className="form-group mt-2">
          <label htmlFor="">state</label>
          <select class="form-select" aria-label="Default select example" name='state' {...register("state",{required:true})}>
  <option selected>Select State</option>
  <option value="uttar pradesh">India</option>
  <option value="delhi">China</option>
  <option value="mumbai">Pakistan</option>
</select>
          </div>
          <div className="form-group mt-2">
          <label htmlFor="">Country</label>
          <select class="form-select" aria-label="Default select example" name='country' {...register("country",{required:true})} >
  <option selected>Select Country</option>
  <option value="india">India</option>
  <option value="china">China</option>
  <option value="pak">Pakistan</option>
</select>
          </div>
          <div className="form-group mt-2">
           <label htmlFor="">pincode</label>
           <input type="number" className="form-control" name='pincode' {...register("pincode",{required:true})} placeholder='pincode...'/>
          </div>
          <div className="form-group mt-2">
           <label htmlFor="">phone</label>
           <input type="number" className="form-control" name='phone' {...register("phone",{required:true})} placeholder='phone...'/>
          </div>
          <button className="p-2 mt-2 text-dark SignUpBtn" >Save changes</button>

         </form>
        </Modal.Body>

       
      </Modal.Dialog>
    </div>
    </>
  )
}

export default AddAddressModal