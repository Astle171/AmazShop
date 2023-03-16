import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import { CartSc } from './screens/CartSc.js'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/cart' element={<CartSc />} />
            <Route path='/cart/:id' element={<CartSc />} />
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
