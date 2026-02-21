import * as Sentry from '@sentry/bun'
import html from './index.html'

Sentry.init({
  dsn: Bun.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
})

const server = Bun.serve({
  port: 3000,
  development: Bun.env.NODE_ENV !== 'production' && {
    hmr: true,
    console: true,
  },
  routes: {
    '/': html,
    '/api/health': {
      GET() {
        return Response.json({ status: 'ok' })
      },
    },
  },
  fetch(_req) {
    return new Response('Not Found', { status: 404 })
  },
})

// biome-ignore lint/suspicious/noConsole: startup log
console.info(`Server running at ${server.url}`)
