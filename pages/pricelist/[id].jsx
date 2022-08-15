import priceListGql from "../../src/query/PriceListGql";
import priceListCountGql from "../../src/query/PriceListCountGql";

import Hero from "../../src/components/Hero";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import SlideGallery from "../../src/components/SlideGallery";

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
        <SlideGallery data={data} />
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  const priceListCount = await priceListCountGql();
console.log(priceListCount);
  return {
    paths: priceListCount.props.data.priceLists.data.map((count) => ({
      params: { id: count.id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  return await priceListGql(context, context.params.id);
}

export default pricelist;
