import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import fetch from 'cross-fetch';

const protocol = process.env.NEXT_PUBLIC_WP_PROTOCOL || 'https';
const host = process.env.NEXT_PUBLIC_WP_HOST || 'cms.example.com';
const endpoint = process.env.WP_GRAPHQL_ENDPOINT || '/graphql';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${protocol}://${host}${endpoint}`,
    fetch,
  }),
  cache: new InMemoryCache(),
});
