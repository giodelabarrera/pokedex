;(async () => {
  if (import.meta.env.MODE === 'development') {
    await import('./dev-server')
  } else if (import.meta.env.MODE === 'test') {
    await import('./test-server')
  } else {
    await import('./dev-server')
  }
})()
