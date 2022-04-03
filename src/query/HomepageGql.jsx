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
            }
          }
        }
        footer(locale: $lang) {
          data {
            attributes {
              Footer_text
              Footer_nav {
                Item_1
                Item_2
                Item_3
                Item_4
                Item_5
              }
              Insta_text
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.homepage.data.attributes,
      footer: data.footer.data.attributes,
    },
  };
}

export default homepageGql;
