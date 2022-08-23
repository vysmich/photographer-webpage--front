import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function priceListCountGql(locale) {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query priceListCount($lang: I18NLocaleCode!) {
        priceLists(locale: $lang) {
          data {
            id
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.priceLists.data,
    },
  };
}

export default priceListCountGql;
