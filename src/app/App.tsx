import * as Sentry from '@sentry/react'
import { HomePage } from '@/pages'

export function App() {
  return (
    <Sentry.ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <HomePage />
    </Sentry.ErrorBoundary>
  )
}
