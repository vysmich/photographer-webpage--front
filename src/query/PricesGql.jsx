import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function pricesGql(context) {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      # Write your query or mutation here
      query prices($lang: I18NLocaleCode!) {
        service(locale: $lang) {
          data {
            attributes {
              PricesHero {
                HeroHeading
                HeroImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              PricesPerex
            }
          }
        }
        priceLists(locale: $lang) {
          data {
            id
            attributes {
              Order
              priceListPerex
              priceListMoreBtn
              price
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
        contact {
          data {
            attributes {
              ContactForm {
                FormField {
                  Label
                  PlaceHolder
                  Name
                }
                SubmitButton
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
      hero: data.service.data.attributes.PricesHero,
      perex: data.service.data.attributes.PricesPerex,
      priceLists: data.priceLists.data,
      layoutData: data.layout.data.attributes,
      contactData: data.contact.data.attributes.ContactForm,
    },
  };
}

export default pricesGql;
