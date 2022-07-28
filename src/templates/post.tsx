import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContentWrapper from "../components/ContentWrapper";
import PostPreNext from "../components/PostPreNext";

export type NearByPost = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

type PostType = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      description: string;
      thumbnail: IGatsbyImageData;
    };
  };
  previous: NearByPost | null;
  next: NearByPost | null;
};

const BlogPostTemplate = ({ data, location }: PageProps<PostType>) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = data;

  const postImage = getImage(post.frontmatter.thumbnail);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <div className="lg:max-w-screen-lg mx-auto">
          <header>
            <h1 className="text-center py-4 my-10" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            {postImage && (
              <GatsbyImage
                className="mb-10"
                image={postImage}
                alt={post.frontmatter.title}
              />
            )}
          </header>
        </div>
        <ContentWrapper>
          <p className="mb-10">{post.frontmatter.date}</p>
          <section
            className="mb-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <PostPreNext previous={previous} next={next} />
        </ContentWrapper>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1280)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
