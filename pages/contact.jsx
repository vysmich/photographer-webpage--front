import Hero from "../src/components/Hero";
import AddressBlock from "../src/components/AddressBlock";
import ContactForm from "../src/components/ContactForm";
import Head from "next/head";

import contactGql from "../src/query/ContactGql";
import { getLayout } from "../src/components/layout/Layout";

function contact({ hero, data, seo }) {
  return (
    <div>
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <Hero heroData={hero} background={"bg-bgsecondary"} />
      <section className="bg-bgsecondary py-6 pt-7 lg:pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
          <AddressBlock adressData={data.AddressBlock} />
          <ContactForm contactData={data.ContactForm} />
        </div>
      </section>
    </div>
  );
}
contact.getLayout = getLayout;
export async function getStaticProps(context) {
  return await contactGql(context);
}

export default contact;
