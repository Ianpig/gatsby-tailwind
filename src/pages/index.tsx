import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import Seo from "../components/Seo";
import PostItem from "../components/PostItem";

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
  };
};

// markup
const IndexPage = ({ data, location }: PageProps<DataWithPosts>) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout location={location}>
      <Seo title="Ian Chu" />
      <Banner />
      <main>
        <div className="container mx-auto py-4 sm:px-4">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <ol style={{ listStyle: `none` }}>
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
              </ol>
            </div>
            <div className="col-span-2">Side bar</div>
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
    }
  }
`;
