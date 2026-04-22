import { Route } from 'react-router-dom'
import './App.css'
import {Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import Orders from './Pages/Orders'
// import Products from './Pages/Products'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/products' element={<Products />} /> */}
      </Routes>
    </>
  )
}

export default App
