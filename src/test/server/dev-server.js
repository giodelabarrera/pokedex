import {setupWorker} from 'msw'
import {handlers} from './server-handlers'

const server = setupWorker(...handlers)
server.start({
  quiet: process.env.NODE_ENV === 'development' ? false : true
})

export * from 'msw'
export {server}
