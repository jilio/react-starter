# React Starter

Starter template for web applications with **Bun + React + TypeScript + Tailwind CSS v4 + shadcn/ui + Effector + Sentry + Zod**.

Uses [Feature-Sliced Design](https://feature-sliced.design/) architecture. No Vite — Bun handles bundling natively.

## Quick Start

```bash
bunx degit jilio/react-starter my-app
cd my-app
bun install
cp .env.example .env
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Runtime & Bundler:** [Bun](https://bun.sh)
- **UI:** [React 19](https://react.dev) + [TypeScript](https://typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com)
- **State:** [Effector](https://effector.dev)
- **Validation:** [Zod](https://zod.dev)
- **Error Tracking:** [Sentry](https://sentry.io) (client + server)
- **Linting:** [Biome](https://biomejs.dev)

## Project Structure (FSD)

```
src/
  app/          — entry point, providers, global styles
  pages/        — full page components
  features/     — user interactions / use cases
  entities/     — business entities
  shared/       — reusable UI, utilities, API clients
```

Layers can only import from layers below: `app → pages → features → entities → shared`.

## Commands

```bash
bun dev                          # Dev server with HMR
bun run build                    # Production build
bun start                        # Production server
bun run typecheck                # TypeScript check
bun run lint                     # Biome lint
bun run lint:fix                 # Biome auto-fix
bunx shadcn@canary add <name>   # Add shadcn component
```

## Adding shadcn Components

```bash
bunx shadcn@canary add button card dialog
```

Components install to `src/shared/ui/components/`.
