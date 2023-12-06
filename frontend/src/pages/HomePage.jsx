import React, { useState ,useEffect} from 'react'
import Sliders from '../components/crousel/Sliders'
import axios from 'axios'
import { useImage } from '../context/imageContext'
import Loading from '../components/Loading'
import { useProduct } from '../context/ProductContext'
import Products from '../components/products/Products'


const HomePage = () => {

  return (
    <div className=''>
   <Sliders/>
   <Products/>
    </div>
  )
}

export default HomePage