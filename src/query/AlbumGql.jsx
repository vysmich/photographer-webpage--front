import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function albumGql(context, id) {
  const { data } = await client.query({
    variables: { lang: context.locale, id: id },

    query: gql`
      # Write your query or mutation here
      query album($lang: I18NLocaleCode!, $id: ID!) {
        album(id: $id, locale: $lang) {
          data {
            attributes {
              AlbumTitle
              EventDescription
              AlbumCover {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              Photos(pagination: { start: 0, limit: -1 }) {
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
        albums {
          data {
            id
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
