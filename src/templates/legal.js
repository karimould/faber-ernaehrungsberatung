import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/Layout';
import LegalContent from '../components/legalContent/LegalContent';

const Legal = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <Helmet titleTemplate="%s | Legal">
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
      <LegalContent
        title={post.frontmatter.title}
        post={post}
      />
    </Layout>
  );
};

Legal.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Legal;

export const pageQuery = graphql`
  query LegalByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
