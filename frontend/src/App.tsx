import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './features/products/HomePage'
import ProductDetailsPage from './features/products/ProductDetailsPage'
import LoginPage from './features/users/LoginPage'
import RegisterPage from './features/users/RegisterPage'
import ProfilePage from './features/users/ProfilePage'
import CartPage from './features/cart/CartPage'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/product/:id' element={<ProductDetailsPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/cart/:id' element={<CartPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
