require('dotenv').config()

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Routes
const routes = require('./routes')

// Register fastify-cors
fastify.register(require('fastify-cors'), { 
  // put your options here
  origin: ["https://dirobash.netlify.app", /localhost/]
})

// Connect to DB
mongoose.connect(process.env.mlab, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.port ? process.env.port : process.env.PORT, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
