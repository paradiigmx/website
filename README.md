# Paradiigm Headless Starter (Next.js + WPGraphQL)

**What you get**
- Next.js 14 with SSG/ISR + SSR where needed
- Apollo Client wired to WPGraphQL
- Pages: Home, Pages by slug, Blog index, Blog posts by slug
- Draft Preview (`/api/preview`) + On-demand ISR Revalidation (`/api/revalidate`)
- Example queries + Image handling

## Setup

1) Copy `.env.example` to `.env.local` and set:
```
NEXT_PUBLIC_WP_PROTOCOL=https
NEXT_PUBLIC_WP_HOST=cms.paradiigm.com
WP_GRAPHQL_ENDPOINT=/graphql
WP_PREVIEW_SECRET=some-long-random
VERCEL_REVALIDATE_TOKEN=some-long-random
```

2) WordPress (cms.paradiigm.com)
- Install: WPGraphQL, ACF, WPGraphQL for ACF, WPGraphQL Smart Cache (optional)
- Permalinks: Post name
- Create Pages and Posts

3) Dev
```
npm i
npm run dev
```

4) Deploy (Vercel recommended)
- Connect GitHub repo; Vercel will auto-build on push
- Set the same env vars in Vercel project settings
- (Optional) Configure WP webhook to call `/api/revalidate`
