import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Astle Machado',
    email: 'astle@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mary Dest',
    email: 'mary@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
