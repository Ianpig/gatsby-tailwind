import React from "react";
import { graphql, PageProps } from "gatsby";
import { getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Seo from "../components/Seo";
import PostItem from "../components/PostItem";
import SideBar from "../components/SideBar";

export type CategoriesType = {
  value: string;
};

export type TagsType = {
  value: string;
};

type DataWithPosts = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: {
    nodes: [
      {
        excerpt: string;
        fields: {
          slug: string;
        };
        frontmatter: {
          date: string;
          title: string;
          description: string;
          thumbnail: IGatsbyImageData;
        };
      }
    ];
    categories: CategoriesType[];
    tags: TagsType[];
  };
};

const IndexPage = ({ data, location }: PageProps<DataWithPosts>) => {
  const posts = data.allMarkdownRemark.nodes;
  const categories = data.allMarkdownRemark.categories;
  const tags = data.allMarkdownRemark.tags;

  return (
    <Layout location={location}>
      <Seo title="Ian Chu" />
      <Banner />
      <main>
        <div className="container mx-auto py-4 sm:px-4 lg:max-w-screen-lg">
          <div className="grid grid-cols-5 gap-20">
            <div className="col-span-3">
              {posts.map((post) => {
                const title = post.frontmatter.title || post.fields.slug;
                const postImage = getImage(post.frontmatter.thumbnail);
                return (
                  <PostItem
                    key={post.fields.slug}
                    slug={post.fields.slug}
                    title={title}
                    description={post.frontmatter.description || post.excerpt}
                    postImage={postImage}
                    date={post.frontmatter.date}
                  />
                );
              })}
            </div>
            <div className="col-span-2">
              <SideBar categories={categories} tags={tags} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
      tags: group(field: frontmatter___tags) {
        value: fieldValue
      }
      categories: group(field: frontmatter___categories) {
        value: fieldValue
      }
    }
  }
`;
