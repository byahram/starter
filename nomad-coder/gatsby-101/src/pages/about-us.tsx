import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export default function AboutUs() {
  return (
    <Layout title="About Us">
      <p>We are the happies sticker more.</p>
    </Layout>
  );
}

export const Head = () => <Seo title="About Us" />;
