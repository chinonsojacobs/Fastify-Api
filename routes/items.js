const items = require('../items')

async function itemRoutes (fastify, options, done) {
    fastify.get('/items', async function(request, reply) {
        reply.send(items)
    })

    fastify.get('/items/:id', async function(request, reply) {
        const {id} = request.params

        const item = items.find((item) => item.id === id)

        reply.send(item)
    })
}

module.exports = itemRoutes