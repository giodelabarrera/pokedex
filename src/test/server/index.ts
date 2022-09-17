export async function initServer() {
  if (import.meta.env.MODE === 'test') {
    await import('./test-server')
  } else {
    await import('./dev-server')
  }
}
