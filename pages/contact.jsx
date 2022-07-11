import Hero from "../src/components/Hero";
import AddressBlock from "../src/components/AddressBlock";
import ContactForm from "../src/components/ContactForm";

import contactGql from "../src/query/ContactGql";

function contact({ hero, data }) {
  return (
    <div>
      <Hero heroData={hero} />
      <section className="dark:bg-gray-800 dark:text-gray-50 py-6 pt-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8">
          <AddressBlock adressData={data.AddressBlock} />
          <ContactForm contactData={data.ContactForm} />
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps(context) {
  return await contactGql(context);
}

export default contact;
