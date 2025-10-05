import Link from 'next/link';
import { GetStaticProps } from 'next';
import { client } from '../../lib/graphql-client';
import { GET_RECENT_POSTS } from '../../lib/queries';

export default function BlogIndex({ posts }: { posts: any[] }) {
  return (
    <main style={{maxWidth: 900, margin: '2rem auto', padding: '0 1rem'}}>
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p.slug} style={{marginBottom: '1rem'}}>
            <Link href={`/blog/${p.slug}`}><strong>{p.title}</strong></Link>
            <div dangerouslySetInnerHTML={{__html: p.excerpt}} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_RECENT_POSTS });
  return {
    props: { posts: data?.posts?.nodes || [] },
    revalidate: 60
  };
};
