import priceListGql from "../../src/query/PriceListGql";
import priceListCountGql from "../../src/query/PriceListCountGql";
import { getLayout } from "../../src/components/layout/Layout";

import Hero from "../../src/components/Hero";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import SlideGallery from "../../src/components/SlideGallery";
import { removeArgumentsFromDocument } from "@apollo/client/utilities";

function pricelist({ hero, data }) {
  return (
    <div className="priceList bg-secondary">
      <Hero heroData={hero} />
      <div className="container py-16 ">
        <ReactMarkdown>{data.priceListContent}</ReactMarkdown>
        <p className="mb-8 text-center font-semibold text-dark text-3xl">
          {data.price}
        </p>
        <div className="flex justify-center">
          <Link href={"/contact"}>
            <a className=" bg-primary   py-3 px-16 text-center uppercase tracking-wider text-white">
              {data.priceListContactBtn}
            </a>
          </Link>
        </div>
        {data.PriceListBestPhoto && <SlideGallery data={data} />}
      </div>
    </div>
  );
}
pricelist.getLayout = getLayout;

export async function getStaticPaths(context) {
  const getAllRoutes = async (context) => {
    let allRoutes = [];
    for (const locale of context.locales) {
      const priceListCount = await priceListCountGql(locale);
      const priceListCountData = priceListCount.props.data;

      for (const count of priceListCountData) {
        allRoutes.push({
          params: { id: count.id },
          locale: locale,
        });
      }
    }
    return allRoutes;
  };

  return {
    paths: await getAllRoutes(context),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  return await priceListGql(context, context.params.id);
}

export default pricelist;
