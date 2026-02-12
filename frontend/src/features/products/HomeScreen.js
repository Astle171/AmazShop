import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from './components/Product'
import { Loader } from '../../components/common/Loader'
import { Message } from '../../components/common/Message'
import { useGetProductsQuery } from '../../app/api/endpoints/productsApi'

const HomeScreen = () => {
  const {
    data: products = [],
    isLoading,
    error,
  } = useGetProductsQuery()

  const errorMessage = error?.data?.message || error?.error

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <Message variant='danger'>{errorMessage}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
