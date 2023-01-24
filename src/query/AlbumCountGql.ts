import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { PageCount } from "./ActionsCoutnGql";

const albumCountGql = async (locale: String): Promise<PageCount> => {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query albumCount($lang: I18NLocaleCode!) {
        albums(locale: $lang) {
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
      data: data.albums.data,
    },
  };
};

export default albumCountGql;
