import React from "react";
import Layout from "../../components/Layout";
import { graphql, PageProps } from "gatsby";
import Seo from "../../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface IBlogDetailProps {
  data: Queries.PostDetailQuery;
  children: any;
}

export default function BlogPost({ data, children }: IBlogDetailProps) {
  console.log(data);
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
  );

  return (
    <Layout title="">
      <div>{children}</div>
      <GatsbyImage image={image as any} alt={data.mdx?.frontmatter?.title!} />
    </Layout>
  );
}

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        author
        category
        date
        title
        slug
        headerImage {
          childImageSharp {
            gatsbyImageData(height: 450, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: IBlogDetailProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
