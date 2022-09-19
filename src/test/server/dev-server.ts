import {setupWorker} from 'msw'
import {handlers} from './server-handlers'

const server = setupWorker(...handlers)
server.start({
  quiet: import.meta.env.MODE === 'development' ? false : true
})

export * from 'msw'
export {server}
