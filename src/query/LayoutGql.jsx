import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function layoutGql(context) {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query layout($lang: I18NLocaleCode!) {
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
    },
  };
}

export default layoutGql;
