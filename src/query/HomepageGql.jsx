import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function homepageGql(context) {
  const { data } = await client.query({
    variables: { lang: context.locale },

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
              MainCategoriesBanner {
                ClaimOne
                ClaimTwo
                ClaimThree
                Gallery {
                  CategoryName
                  Link
                  Image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
              AboutBanner {
                Title
                subTitle
                Content
                psText
                btnText
                aboutGallery {
                  Image {
                    data {
                      attributes {
                        alternativeText
                        url
                      }
                    }
                  }
                  CategoryName
                }
              }
            }
          }
        }
        layout(locale: $lang) {
          data {
            attributes {
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
      contextLocale: context.locale,
      layout: data.layout.data.attributes,
      hero: data.homepage.data.attributes.Hero,
      mainCategoriesBanner: data.homepage.data.attributes.MainCategoriesBanner,
      aboutBanner: data.homepage.data.attributes.AboutBanner,
    },
  };
}

export default homepageGql;
