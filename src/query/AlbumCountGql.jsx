import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function albumCountGql(locale) {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query albumCount($lang: I18NLocaleCode!) {
        albums(locale: $lang) {
          data {
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.albums.data,
    },
  };
}

export default albumCountGql;
