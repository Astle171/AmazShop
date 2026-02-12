import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Message } from '../../components/common/Message'
import { Loader } from '../../components/common/Loader'
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} from '../../app/api/endpoints/usersApi'

const ProfileScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth)
  const [updateUserProfile, { isLoading: isUpdating, isSuccess, error: updateError }] =
    useUpdateUserProfileMutation()
  const {
    data: user,
    isLoading,
    error,
  } = useGetUserProfileQuery(undefined, { skip: !userInfo })

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
      return
    }
    if (user?.name) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [navigate, userInfo, user])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      setMessage(null)
      await updateUserProfile({ id: user?._id, name, email, password })
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && (
          <Message variant='danger'>
            {error?.data?.message || error?.error}
          </Message>
        )}
        {updateError && (
          <Message variant='danger'>
            {updateError?.data?.message || updateError?.error}
          </Message>
        )}
        {isSuccess && <Message variant='success'>Profile Updated</Message>}
        {(isLoading || isUpdating) && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen
