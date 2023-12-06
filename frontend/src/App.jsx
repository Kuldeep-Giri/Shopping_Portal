import React, { Children, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Home from './pages/selller/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { useAuth } from './context/authContext'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header'
import AddCompany from './pages/selller/AddCompany'
import CompanyDetails from './pages/selller/CompanyDetails'
import Nav from './components/Navbar/Nav'
import AddProduct from './pages/selller/AddProduct'
import CategoryFilters from './pages/CategoryFilters'
import SinProduct from './components/SingleProduct/SinProduct'
import Cart from './pages/cart/Cart'
import Search from './pages/Search/Search'
import AddressList from './pages/address/AddressList'
import MakePyment from './pages/address/MakePyment'
const App = () => {
  const [auth] = useAuth()
  const token = auth.token
  const navigate = useNavigate()


  return (
   <>
   
<ToastContainer
position="bottom-right"
autoClose={200}

/>   
<Header/>
<Nav/>
<Routes>
<Route path='/' element={<HomePage/>} />
   <Route path='/register' element={<Register/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/search' element={<Search/>} />
   <Route path='/cat-product' element={<CategoryFilters/>}/>
   <Route path='/sin-product/:id' element={<SinProduct/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/address-list' element={<AddressList/>}/>
   <Route path='/makepayment' element={<MakePyment/>}/>


 
   {/* seller */}
   {
    auth?.user?.user_type === "seller" ?
    <>
    <Route path='/seller-homepage' element={<Home/>} />
    <Route path='/comapny-detailes' element={<CompanyDetails/>} />
    <Route path='/add-comapny-detailes' element={<AddCompany/>} />
    <Route path='/add-product' element={<AddProduct/>} />

    </> :<>
    <Route path='/' element={<HomePage/>} />
    
    </>
   }
   
   </Routes>
   </>
  )
}

export default App