import { gql } from '@apollo/client';

export const GET_GENERAL_SETTINGS = gql`
  query GetGeneralSettings {
    generalSettings {
      title
      description
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      featuredImage { node { sourceUrl, altText, mediaDetails { width, height } } }
      seo: seo {
        metaDesc
        title
      }
    }
  }
`;

export const GET_ALL_PAGES_SLUGS = gql`
  query AllPagesSlugs {
    pages(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      featuredImage { node { sourceUrl, altText, mediaDetails { width, height } } }
    }
  }
`;

export const GET_RECENT_POSTS = gql`
  query RecentPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;

export const GET_ALL_POST_SLUGS = gql`
  query AllPostSlugs {
    posts(first: 100) {
      nodes { slug }
    }
  }
`;
