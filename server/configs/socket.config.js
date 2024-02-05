const socketIO = require('socket.io')

let io

function InitiateSocket(server) {
  io = socketIO(server)

  io.use((socket, next) => {
    next()
  })

  io.on('connection', (socket) => {
    console.log('user has connected' + socket.id)

    socket.on('disconnect', () => {
      console.log('user has disconnected')
    })
  })
}

function getIO() {
  if (!io) {
    return new Error(
      'Socket.IO not initialized. Call initializeSocket() first.',
    )
  }
  return io
}

module.exports = { InitiateSocket, getIO }
