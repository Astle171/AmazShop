import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

type FormContainerProps = {
  children: React.ReactNode
}

const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <Container>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
