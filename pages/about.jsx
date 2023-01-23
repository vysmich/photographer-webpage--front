//components
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
//query
import aboutGql from "../src/query/AboutGql";
//layout
import { getLayout } from "../src/components/layout/Layout";

function About({
  title,
  body,
  seo,
  mainImage,
  gallery,
  contactButton,
  portfolioButton,
}) {
  console.log(gallery.data);
  return (
    <div>
      <Head>
        <title>{seo.SeoTitle}</title>
        <meta name="description" content={seo.SeoDescription} />
      </Head>
      <div className="container pt-10 xl:pt-[100px]">
        <h2 className="mb-5 text-center">{title}</h2>
        <div>
          <div className="relative mt-1 mb-8 aspect-[16/9] lg:float-right lg:ml-12 lg:min-h-[360px] lg:max-w-2xl">
            <Image
              src={mainImage.data.attributes.formats.medium.url}
              alt={mainImage.data.attributes.alternativeText}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <ReactMarkdown>{body}</ReactMarkdown>
        <div className="my-16 flex flex-col justify-center md:flex-row">
          <a
            className="btn-primary mb-6 md:mb-0 md:mr-8"
            href={contactButton.btnLink}
          >
            {contactButton.btnText}
          </a>
          <a className="btn-primary md:ml-8" href={portfolioButton.btnLink}>
            {portfolioButton.btnText}
          </a>
        </div>
        <div className="mt-8 grid gap-4 pb-16 md:grid-cols-2">
          {gallery.data.map((item) => (
            <div key={item.id} className="relative aspect-[16/9]">
              <Image
                src={item.attributes.formats.medium.url}
                alt={item.attributes.alternativeText}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

About.getLayout = getLayout;
export async function getStaticProps(context) {
  return await aboutGql(context);
}

export default About;
