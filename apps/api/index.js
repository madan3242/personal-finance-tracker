import Fastify from 'fastify';

const fastify = Fastify({
    logger: true
})

fastify.get('/', async function handler (request, reply) {
    return { hello: 'Hello'}
})

fastify.get('/hello', async function handler (request, reply) {
    return { hello: 'Hello from /hello'}
})

try {
    await fastify.listen({port: 3000})
} catch (error) {
    fastify.log.error(err)
    process.exit(1)
}