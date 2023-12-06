import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './context/authContext.jsx'
import { SellerProvider } from './context/sellerContext.jsx'
import { CatAndCarirProvider } from './context/categoryAndCarrierContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { ImageProvider } from './context/imageContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { LoadingProvider } from './context/LoadingContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <LoadingProvider>
<SearchProvider>
<AuthProvider>
    <CartProvider>
    <ImageProvider>
    <ProductProvider>
    <CatAndCarirProvider>
    <SellerProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </SellerProvider>
  </CatAndCarirProvider>
  </ProductProvider>
  </ImageProvider>
  </CartProvider>
  </AuthProvider>
</SearchProvider>
  </LoadingProvider>,
)
