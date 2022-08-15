import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function priceListCountGql() {
  const { data } = await client.query({
    query: gql`
      query priceListCount {
        priceLists {
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

export default priceListCountGql;
