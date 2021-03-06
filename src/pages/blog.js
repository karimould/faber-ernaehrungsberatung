import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layouts/Layout";
import SubpageHeader from "../components/subpageHeader/SubpageHeader";
import BlogPostPageCard from "../components/blogPostCard/BlogPostPageCard";

const Blog = props => {
  const { data } = props;
  const { edges: posts } = data.referenzen;
  return (
    <Layout
      title="Faber Ernährungsberatung Hannover | Blog"
      description="Alles Rund um Ernährung, Lebensmittel und Lebensqualität. Erfahre mehr zu Mythen und Fakten in unserem Blog. Faber Ernährungsberatung in Hannover und Region"
    >
      <SubpageHeader blog checkheader="h1" sitename="blog" title="Blog" />
      <div className="container-full blog-overview-container">
        <div className="blog-overview-grid">
          {/* eslint-disable-next-line */}
          {posts.map(({ node: post }, index) => {
            return (
              <BlogPostPageCard
                link={post.fields.slug}
                date={post.frontmatter.date}
                category={post.frontmatter.category}
                title={post.frontmatter.title}
                text={post.frontmatter.description}
                html={post.html}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Blog;

export const pageQuery = graphql`
  query BlogPageContent {
    referenzen: allMarkdownRemark(
      filter: { frontmatter: { pageKey: { eq: "page_blogpost" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            title
            description
            date(formatString: "DD.MM.YYYY")
            category
          }
        }
      }
    }
  }
`;
