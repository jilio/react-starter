import * as Sentry from '@sentry/react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

let sentryDsn: string | undefined
try {
  sentryDsn = process.env.BUN_PUBLIC_SENTRY_DSN
} catch {
  // env var not inlined by bundler (not set in environment)
}

Sentry.init({
  dsn: sentryDsn,
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
})

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

createRoot(rootElement, {
  onCaughtError: Sentry.reactErrorHandler(),
  onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
    // biome-ignore lint/suspicious/noConsole: error boundary log
    console.warn('Uncaught error', error, errorInfo.componentStack)
  }),
}).render(<App />)
