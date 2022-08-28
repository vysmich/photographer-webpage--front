import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function textPageCountGql(locale) {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query textPageCount($lang: I18NLocaleCode!) {
        textPages(locale: $lang) {
          data {
            attributes {
              Slug
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.textPages.data,
    },
  };
}

export default textPageCountGql;
