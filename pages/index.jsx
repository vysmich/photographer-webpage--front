import Layout from "../src/components/layout/Layout";

import homepageGql from "../src/query/HomepageGql";

export default function Home({ data, footer }) {
  return (
    <Layout footer={footer}>
      <div className="container mx-auto">
        <h1 className=" text text-red-700 my-5 text-center text-3xl font-bold">
          {data.Hero.HeroHeading}
          <p className=" w-screen"></p>
        </h1>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return homepageGql(context);
}
