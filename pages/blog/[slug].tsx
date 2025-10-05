import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../../lib/graphql-client';
import { GET_ALL_POST_SLUGS, GET_POST_BY_SLUG } from '../../lib/queries';

export default function BlogPost({ post }: { post: any }) {
  if (!post) return <main>Not found</main>;
  return (
    <main style={{maxWidth: 900, margin: '2rem auto', padding: '0 1rem'}}>
      <Head><title>{post.title}</title></Head>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{__html: post.content}} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ALL_POST_SLUGS });
  const paths = (data?.posts?.nodes || []).map((n: any) => ({ params: { slug: n.slug }}));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { data } = await client.query({ query: GET_POST_BY_SLUG, variables: { slug } });
  return {
    props: { post: data?.post || null },
    revalidate: 60
  };
};
