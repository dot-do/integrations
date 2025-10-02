import { defineConfig, defineCollection, s } from 'velite'

const integrations = defineCollection({
  name: 'Integration',
  pattern: 'integrations/**/*.mdx',
  schema: s.object({
    title: s.string(),
    slug: s.path(),
    description: s.string(),
    provider: s.string(),
    authType: s.enum(['oauth', 'api-key', 'basic', 'none']).optional(),
    endpoints: s.array(s.string()).default([]),
    webhooks: s.array(s.string()).default([]),
    metadata: s.object({
      ns: s.string().default('integration'),
      visibility: s.enum(['public', 'private', 'unlisted']).default('public')
    }).default({}),
    tags: s.array(s.string()).default([]),
    content: s.mdx()
  }).transform(data => ({ ...data, url: `/integrations/${data.slug}` }))
})

export default defineConfig({
  root: '.',
  output: { data: '.velite', assets: 'public/static', base: '/static/', name: '[name]-[hash:6].[ext]', clean: true },
  collections: { integrations },
  mdx: { rehypePlugins: [], remarkPlugins: [] }
})
