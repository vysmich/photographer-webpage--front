import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function albumCountGql() {
  const { data } = await client.query({
    query: gql`
      query albumCount {
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

export default albumCountGql;
