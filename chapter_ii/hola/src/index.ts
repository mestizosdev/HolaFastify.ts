import fastify from 'fastify'
import prismaPlugin from './plugins/prisma'
import routePing from './modules/ping/ping.route'
import routeVersion from './modules/version/version.route'

const server = fastify({
  logger: true
})

server.register(routePing)
server.register(routeVersion)
server.register(prismaPlugin)

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
