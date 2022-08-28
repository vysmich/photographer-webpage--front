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
                      alternativeText
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
              MainCategoriesBanner {
                Title
                Content
                PortfolioButton {
                  btnText
                  btnLink
                }

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
      hero: data.homepage.data.attributes.Hero,
      mainCategoriesBanner: data.homepage.data.attributes.MainCategoriesBanner,
      aboutBanner: data.homepage.data.attributes.AboutBanner,
      layoutData: data.layout.data.attributes,
    },
  };
}

export default homepageGql;
