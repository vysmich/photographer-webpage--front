import { gql } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import client from "../../apollo-client";
import { IHero, LayoutData } from "./HomepageGql";

export interface TextPageProps {
  hero: IHero;
  title: string;
  body: string;
  layoutData: LayoutData;
}

interface TextPageGql {
  props: TextPageProps;
}

const textPageGql = async (
  context: GetStaticPropsContext
): Promise<TextPageGql> => {
  const { data } = await client.query({
    variables: { lang: context.locale, slug: context?.params?.slug },
    query: gql`
      # Write your query or mutation here
      query album($lang: I18NLocaleCode!, $slug: String) {
        textPages(locale: $lang, filters: { Slug: { eq: $slug } }) {
          data {
            attributes {
              PageHero {
                HeroHeading
                HeroImage {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                HeroImageMobile {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
              Title
              Body
              Slug
            }
          }
        }
        layout(locale: $lang) {
          data {
            attributes {
              TextPageNav {
                navItem {
                  link
                  title
                }
              }
              footerText
              instaText
              Nav {
                navItem {
                  link
                  title
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
      hero: data.textPages.data[0].attributes.PageHero,
      title: data.textPages.data[0].attributes.Title,
      body: data.textPages.data[0].attributes.Body,
      layoutData: data.layout.data.attributes,
    },
  };
};

export default textPageGql;
