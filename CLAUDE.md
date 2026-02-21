# Project Conventions

## Stack

- **Runtime/Bundler:** Bun (no Vite)
- **Framework:** React 19 + TypeScript
- **State management:** Effector
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Error tracking:** Sentry (client + server)
- **Validation:** Zod

## Architecture: Feature-Sliced Design (FSD)

```
src/
  app/        — app entry, providers, global styles
  pages/      — full page components
  widgets/    — composite UI blocks combining features/entities
  features/   — user interactions / use cases
  entities/   — business entities
  shared/     — reusable utilities, UI kit, API clients
```

**Import rule:** layers can only import from layers below them:
`app → pages → widgets → features → entities → shared`

Each layer uses `index.ts` as its public API. Never import from internal paths of another layer.

## Type Safety Rules

### No `as` type assertions

Never use `as` for type casting. Biome enforces `noNonNullAssertion` and `noExplicitAny`, but cannot detect `as` casts. This is a manual rule.

```typescript
// Bad
const user = data as User
const id = (event.target as HTMLInputElement).value

// Good — use Zod for runtime validation
const user = UserSchema.parse(data)

// Good — use type narrowing
if (event.target instanceof HTMLInputElement) {
  const id = event.target.value
}
```

### Use Zod for runtime type validation

When receiving data from external sources (API responses, form data, URL params), always validate with Zod schemas instead of type assertions.

## Effector Naming Conventions

- Stores: `$storeName` (e.g., `$user`, `$isLoading`)
- Effects: `effectNameFx` (e.g., `fetchUserFx`, `submitFormFx`)
- Events: `eventName` (e.g., `pageOpened`, `formSubmitted`)

## Commands

- `bun dev` — start dev server with HMR
- `bun run build` — production build
- `bun start` — run production server
- `bun run typecheck` — type checking
- `bun run lint` — lint with Biome
- `bun run lint:fix` — lint and auto-fix
- `bunx shadcn@canary add <component>` — add shadcn component
