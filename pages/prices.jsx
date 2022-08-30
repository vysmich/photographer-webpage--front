import pricesGql from "../src/query/PricesGql";
import { getLayout } from "../src/components/layout/Layout";

import ReactMarkdown from "react-markdown";
import Hero from "../src/components/Hero";
import PriceCard from "../src/components/PriceCard";

function prices({ hero, perex, priceLists, contactData }) {
  return (
    <div className=" bg-secondary pb-16">
      <Hero heroData={hero} />
      <div className="container">
        <ReactMarkdown className=" pb-10 pt-16 text-center">
          {perex}
        </ReactMarkdown>
        <div className="grid justify-center gap-12 ">
          {priceLists.map((list) => (
            <PriceCard
              key={list.id}
              list={list}
              contactData={contactData}
            ></PriceCard>
          ))}
        </div>
      </div>
    </div>
  );
}
prices.getLayout = getLayout;
export async function getStaticProps(context) {
  return await pricesGql(context);
}

export default prices;
