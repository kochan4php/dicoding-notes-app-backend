import Hapi from '@hapi/hapi'
import api from './routes/api.js'
import hapiCors from 'hapi-cors'

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        // host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: true
        }
    })
    await server.register(hapiCors)

    server.route(api)

    await server.start()
    console.log('Server is running on %s', server.info.uri)
}

export default init
