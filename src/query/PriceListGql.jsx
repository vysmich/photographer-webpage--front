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
    },
  };
}

export default priceListGql;
