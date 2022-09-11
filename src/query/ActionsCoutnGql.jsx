import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function actionsCountGql(locale) {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query actionsCount($lang: I18NLocaleCode!) {
        actions(locale: $lang) {
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
      data: data.actions.data,
    },
  };
}

export default actionsCountGql;
