# CLAUDE.md - integrations Repository

## Project Overview

The **integrations repository** stores **integration configurations** as MDX files with Zod schema validation via Velite, enabling bidirectional synchronization with the PostgreSQL database.

**Purpose**: Define and manage integration entities as version-controlled MDX files that sync automatically to the database.

**Position**: 📝 **Content Layer** - Content source that syncs to db layer

## Schema

The Velite schema for integrations includes:

### Required Fields
- **title** (string): Integration name
- **description** (string): What the integration does

### Optional Fields
- **provider** (string): Service provider name
- **category** (string): Integration category
- **authType** (string): Authentication type (OAuth, API Key, etc.)
- **endpoint** (URL): API endpoint
- **webhooks** (array): Webhook configurations
- **capabilities** (array): Supported capabilities
- **rateLimit** (object): Rate limiting details
- **metadata**: Namespace and visibility
- **tags** (array): Categorization tags

## MDX File Example

```mdx
---
title: Stripe Integration
description: Accept payments and manage subscriptions via Stripe
provider: Stripe
category: payments
authType: API Key
endpoint: https://api.stripe.com/v1
capabilities:
  - payments
  - subscriptions
  - invoices
  - customers
rateLimit:
  requests: 100
  period: second
metadata:
  ns: integrations
  visibility: public
tags:
  - payments
  - billing
  - stripe
---

# Stripe Integration

Integrate with Stripe for payment processing, subscription management, and billing.

## Configuration

API keys required: publishable and secret keys from Stripe dashboard.

## Webhooks

Configure webhook endpoint: `POST /webhooks/stripe`
```

## Development Commands

```bash
# Install dependencies
pnpm install

# Build and validate all MDX files
pnpm build

# Watch mode for development
pnpm dev

# Type check
pnpm check-types
```

## Examples

See **[examples/](../examples/)** for working TypeScript + MDX integration examples:

- **stripe-webhooks-integration.mdx** - Complete Stripe webhook handling (payments, subscriptions, invoices)

These examples demonstrate:
- ✅ Full TypeScript intellisense in MDX files
- ✅ Webhook signature verification and security
- ✅ Event routing and handler functions
- ✅ Error handling and retry logic
- ✅ Database synchronization
- ✅ Testing with Stripe CLI

Run examples: `pnpm --filter examples dev`

## Related Documentation

- **Parent**: [Root CLAUDE.md](../CLAUDE.md) - Multi-repo management
- **Database**: [db/CLAUDE.md](../db/CLAUDE.md) - Database schema and sync
- **API**: [api/CLAUDE.md](../api/CLAUDE.md) - Webhook handler
- **Workers**: [workers/webhooks/](../workers/CLAUDE.md) - Webhook processing

---

**Last Updated**: 2025-10-03
**Maintained By**: Claude Code
**Repository**: https://github.com/dot-do/integrations
