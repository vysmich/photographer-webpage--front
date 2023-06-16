import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { PageCount } from "./ActionsCoutnGql";

const blogCountGql = async (locale: String): Promise<PageCount> => {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query blogCount($lang: I18NLocaleCode!) {
        blogs(locale: $lang) {
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
      data: data.blogs.data,
    },
  };
};

export default blogCountGql;
