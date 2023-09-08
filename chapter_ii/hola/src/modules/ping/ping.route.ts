import { FastifyInstance } from 'fastify'

async function routePing(fastify: FastifyInstance) {
  fastify.get('/ping', async () => {
    return { message: 'pong' }
  })
}

export = routePing
