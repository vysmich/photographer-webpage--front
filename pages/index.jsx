import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ data }) {
  return (
    <div className="container mx-auto">
      <h1 className=" text my-5 text-center text-3xl font-bold text-red-700">
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
