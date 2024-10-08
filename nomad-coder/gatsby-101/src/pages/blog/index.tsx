import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

export default function BlogPage({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <>
            <article key={index}>
              <Link to={`/blog/${file.frontmatter?.slug}`}>
                <h3>{file.frontmatter?.title}</h3>
                <h5>
                  {file.frontmatter?.author} in: {file.frontmatter?.category}
                </h5>
                <h6>{file.frontmatter?.date}</h6>
                <p>{file.excerpt}</p>
              </Link>
            </article>
          </>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          author
          category
          date(formatString: "YYYY.MM.DD")
          slug
        }
        excerpt(pruneLength: 25)
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
