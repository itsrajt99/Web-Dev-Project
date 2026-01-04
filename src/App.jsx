import React, { useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import { AppContext } from './Context/AppContext'
import MyOrders from './Pages/MyOrders'
import Auth from './Models/Auth'
import ProductCategory from './Pages/ProductCategory'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import AddAddress from './Pages/AddAddress'
// import SellerLayout from './Pages/Seller/SellerLayout'
// import SellerLogin from './Components/Seller/SellerLogin'
import AddProduct from './Pages/Seller/AddProduct'
import ProductList from './Pages/Seller/ProductList'
import Orders from './Pages/Seller/Orders'
import SellerLogin from './Components/Seller/SellerLogin'
import SellerLayout from './Pages/Seller/SellerLayout'


const App = () => {
  const {isSeller,showUserLogin} = useContext(AppContext);
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
       {isSellerPath ? null : <Navbar/> }
       {showUserLogin ? <Auth/> : null}
       <Toaster/>
        <div className='px-6 md:px-16 lg:24 xl:32'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/product/category/:id' element={<ProductDetail/>} />
          <Route path='/products/:category' element={<ProductCategory/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/my-orders' element={<MyOrders/>} />
          <Route path='add-address' element={<AddAddress/>}/>
          <Route path='/seller' element={isSeller ? <SellerLayout/> : <SellerLogin/>}>
          <Route index element={isSeller ? <AddProduct/> :null}/> 
          <Route path='product-list' element={<ProductList/>}/> 
          <Route path='orders' element={<Orders/>}/>
          </Route>
        </Routes>
       </div>
        {isSellerPath ? null : <Footer/>}
    </div>
    
  )
}

export default App
