import Layout from "../src/components/layout/Layout";
import Hero from "../src/components/Hero/Hero";

import homepageGql from "../src/query/HomepageGql";

export default function Home({ hero, footer, contextLocale }) {
  return (
    <Layout footer={footer} contextLocale={contextLocale}>
      <Hero hero={hero} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return homepageGql(context);
}
