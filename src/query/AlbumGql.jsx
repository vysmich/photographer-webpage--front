import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function albumGql(context, id) {
  const { data } = await client.query({
    variables: { lang: context.locale, id: id },

    query: gql`
      query album($lang: I18NLocaleCode!, $id: ID!) {
        album(id: $id, locale: $lang) {
          data {
            attributes {
              AlbumTitle
              Photos {
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
    `,
  });

  return {
    props: {
      data: data,
    },
  };
}

export default albumGql;
