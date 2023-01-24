import React from "react";
//Components
import Head from "next/head";
import Hero from "../src/components/Hero";
import AddressBlock from "../src/components/AddressBlock";
import ContactForm from "../src/components/ContactForm";
//Query
import contactGql from "../src/query/ContactGql";
//Types
import { ContactProps } from "../src/query/ContactGql";
import { GetStaticProps } from "next";
import { NextPageWithLayout } from "../pages/index";
//Layout
import { getLayout } from "../src/components/layout/Layout";

const contact: NextPageWithLayout<ContactProps> = ({ hero, data, seo }) => {
  return (
    <div>
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <Hero heroData={hero} background={"bg-bgsecondary"} />
      <section id="contact" className="relative z-10 bg-bgsecondary py-6 pt-7 ">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
          <AddressBlock addressData={data.AddressBlock} />
          <ContactForm contactData={data.ContactForm} />
        </div>
      </section>
    </div>
  );
};
contact.getLayout = getLayout;
export const getStaticProps: GetStaticProps = async (context) => {
  return await contactGql(context);
};

export default contact;
