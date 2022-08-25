import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function priceListGql(context, id) {
  const { data } = await client.query({
    variables: { lang: context.locale, id: id },

    query: gql`
      query prices($lang: I18NLocaleCode!, $id: ID!) {
        priceList(id: $id, locale: $lang) {
          data {
            id
            attributes {
              priceListPerex
              priceListMoreBtn
              priceListContactBtn
              priceListContent
              price
              PriceListBestPhoto {
                title
                gallery {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              priceListHero {
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
      hero: data.priceList.data.attributes.priceListHero,
      data: data.priceList.data.attributes,
      layoutData: data.layout.data.attributes,
    },
  };
}

export default priceListGql;
