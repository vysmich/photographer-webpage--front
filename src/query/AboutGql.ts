import { gql } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import client from "../../apollo-client";
import { Image, LayoutData, Seo } from "./HomepageGql";

export interface Button {
  btnText: string;
  btnLink: string;
}

export interface AboutPage {
  title: string;
  body: string;
  layoutData: LayoutData;
  seo: Seo;
  mainImage: Image;
  gallery: {
    data: {
      id: string;
      attributes: {
        alternativeText: string;
        formats: {
          medium: {
            url: string;
          };
          small: {
            url: string;
          };
        };
      };
    }[];
  };

  portfolioButton: Button;
  contactButton: Button;
}
interface AboutPageGqlProps {
  props: AboutPage;
}

export const aboutGql = async (
  context: GetStaticPropsContext
): Promise<AboutPageGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query ($lang: I18NLocaleCode!) {
        aboutpage(locale: $lang) {
          data {
            attributes {
              title
              body
              gallery {
                data {
                  id
                  attributes {
                    alternativeText
                    formats
                  }
                }
              }
              seo {
                SeoTitle
                SeoDescription
              }
              mainImage {
                data {
                  attributes {
                    formats
                  }
                }
              }
              contactButton {
                btnText
                btnLink
              }
              portfolioButton {
                btnText
                btnLink
              }
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
      title: data.aboutpage.data.attributes.title,
      body: data.aboutpage.data.attributes.body,
      layoutData: data.layout.data.attributes,
      seo: data.aboutpage.data.attributes.seo,
      mainImage: data.aboutpage.data.attributes.mainImage,
      gallery: data.aboutpage.data.attributes.gallery,
      portfolioButton: data.aboutpage.data.attributes.portfolioButton,
      contactButton: data.aboutpage.data.attributes.contactButton,
    },
  };
};

export default aboutGql;
