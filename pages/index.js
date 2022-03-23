import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ data }) {
  return (
    <div className="container mx-auto">
      <Link href="/" locale="en-US">
        <a className=" mr-7 ">To EN</a>
      </Link>
      <Link href="/" locale="cs-CZ">
        <a>To CZ</a>
      </Link>
      <h1 className=" my-5 text-center text-3xl text-red-700 ">
        {data.Hero.HeroHeading}
      </h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const language = context.locale;

  const { data } = await client.query({
    variables: { lang: language },

    query: gql`
      query homepage($lang: I18NLocaleCode!) {
        homepage(locale: $lang) {
          data {
            attributes {
              Hero {
                HeroHeading
                HeroImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.homepage.data.attributes,
    },
  };
}
