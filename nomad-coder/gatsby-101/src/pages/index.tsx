import * as React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { graphql, Link, PageProps } from "gatsby";

const IndexPage = ({ data }: PageProps<Queries.StickersQuery>) => {
  console.log(data);
  return (
    <Layout title="Welcome to DevStickers">
      {/* <StaticImage
        height={500}
        src="https://plus.unsplash.com/premium_photo-1718146018980-95d9afd69090?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Static Image"
      ></StaticImage> */}

      <div className="grid">
        {data.allContentfulStickerPack.nodes.map((sticker) => (
          <article>
            <GatsbyImage
              image={getImage(sticker.preview?.gatsbyImageData!)!}
              alt={sticker.name!}
            />
            <Link to={`/products/${sticker.id}`}>
              <h2>{sticker.name}</h2>
              <h4>${sticker.price}</h4>
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query Stickers {
    allContentfulStickerPack {
      nodes {
        id
        name
        price
        preview {
          gatsbyImageData(height: 250, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Home" />;
