import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import { client } from '../lib/graphql-client';
import { GET_ALL_PAGES_SLUGS, GET_PAGE_BY_SLUG } from '../lib/queries';

export default function Page({ page }: { page: any }) {
  if (!page) return <main>Not found</main>;
  return (
    <main style={{maxWidth: 900, margin: '2rem auto', padding: '0 1rem'}}>
      <Head><title>{page.title}</title></Head>
      <h1>{page.title}</h1>
      <article dangerouslySetInnerHTML={{__html: page.content}} />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ALL_PAGES_SLUGS });
  const paths = (data?.pages?.nodes || []).map((n: any) => ({ params: { slug: n.slug }}));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const { data } = await client.query({ query: GET_PAGE_BY_SLUG, variables: { slug } });
  return {
    props: { page: data?.page || null },
    revalidate: 60
  };
};
