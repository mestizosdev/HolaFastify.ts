import fastify from 'fastify'
import routes from './modules/ping/ping.route'

const server = fastify({
  logger: true
})

server.register(routes)

const start = async () => {
  try {
    server.log.info('Start Server')
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
