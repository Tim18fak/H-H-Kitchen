const express = require('express')
const session = require('express-session')

const app = express()

// Use the session middleware
app.use(
  session({
    secret: 'your-secret-key', // This is used to sign the session ID cookie
    resave: false,
    saveUninitialized: true,
  }),
)

// Your routes and other middleware come here

// Example route to set and retrieve session data
app.get('/set-session', (req, res) => {
  req.session.username = 'JohnDoe'
  res.send('Session data set.')
})

app.get('/get-session', (req, res) => {
  const username = req.session.username || 'Guest'
  res.send(`Hello, ${username}!`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

const app = express()

// Use session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  }),
)

// Use bodyParser middleware to parse POST request data
app.use(bodyParser.urlencoded({ extended: true }))

// Sample user data (in a real-world scenario, use a database)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
]

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.username) {
    return next()
  } else {
    return res.status(401).send('Unauthorized')
  }
}

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the home page!')
})

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body

  // Check if the provided username and password match any user
  const user = users.find(
    (u) => u.username === username && u.password === password,
  )

  if (user) {
    // Set session data
    req.session.username = username
    res.send('Login successful! You can now access protected features.')
  } else {
    res.status(401).send('Invalid username or password')
  }
})

// Protected route - requires authentication
app.get('/protected', isAuthenticated, (req, res) => {
  res.send(`Welcome to the protected area, ${req.session.username}!`)
})

// Logout route
app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.error(err)
    }
    // After destroying the session, the res.redirect('/') line instructs the server to redirect the user to the root path ("/"), typically the home page or login page.
    res.redirect('/')
  })
})

const pORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
