import { FastifyInstance } from 'fastify'

async function routes(fastify: FastifyInstance) {
  fastify.get('/ping', async () => {
    return { message: 'pong' }
  })
}

export = routes
