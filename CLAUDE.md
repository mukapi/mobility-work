# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Custom TypeScript/JavaScript code for the Mobility Work Webflow site. Based on a simplified version of the Finsweet developer starter.

**Site WordPress actuel:** https://mobility-work.com/
**Site Webflow (staging):** https://staging-mobility-work.webflow.io/

## Commands

```bash
pnpm dev          # Development build + local server at localhost:3000
pnpm build        # Production build (minified, no sourcemap)
pnpm lint         # ESLint + Prettier check
pnpm lint:fix     # Auto-fix ESLint issues
pnpm check        # TypeScript type checking
pnpm format       # Prettier formatting
```

## Architecture

**Entry Point:** `src/index.ts` - Uses Webflow's callback pattern:
```typescript
window.Webflow ||= [];
window.Webflow.push(() => {
  // Code runs after Webflow initialization
});
```

**Key Directories:**
- `src/` - TypeScript source code
- `src/utils/` - Utility functions (imported via `$utils/` path alias)
- `bin/` - Build scripts (esbuild configuration, live reload)
- `dist/` - Build output (generated)

**Path Alias:** Use `$utils/*` to import from `src/utils/*`

## Development Workflow

1. Run `pnpm dev` to start local server
2. Add script tag in Webflow: `<script defer src="http://localhost:3000/index.js"></script>`
3. Files auto-reload on save
4. Run `pnpm build` for production output

## Migration Context

See `MIGRATION-REPORT.md` for the WordPress → Webflow migration status and missing content analysis.
