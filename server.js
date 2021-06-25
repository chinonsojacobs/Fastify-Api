const fastify = require('fastify')({
    logger: null
})

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'fastify-api'
        }
    }
})
fastify.register(require('./routes/items'))

const start = async() => {
    try {
        await fastify.listen(3000)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()