import React from 'react'
import { Alert } from 'react-bootstrap'

type MessageProps = {
  variant?: string
  children: React.ReactNode
}

export const Message = ({ variant = 'info', children }: MessageProps) => {
  return <Alert variant={variant}>{children}</Alert>
}
