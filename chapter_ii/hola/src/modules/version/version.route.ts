import { PrismaClient } from '@prisma/client'
import { FastifyInstance } from 'fastify'

const prisma = new PrismaClient()

interface Version {
  version: string
}

async function routeVersion(fastify: FastifyInstance) {
  fastify.get('/version', async (req, rep) => {
    // const profile = await prisma.profile.findMany()
    try {
      const result = await prisma.$queryRaw<Version[]>`select version()`

      return { version: result[0].version }
    } catch (e) {
      console.log((e as Error).message)
      rep.code(404)
      return { version: (e as Error).message }
    }
  })
}

export = routeVersion
