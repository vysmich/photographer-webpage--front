import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { PageCount } from "./ActionsCoutnGql";

interface BlogCount {
  props: {
    data: {
      attributes: {
        slug: string;
      };
    }[];
  };
}
const blogCountGql = async (locale: String): Promise<BlogCount> => {
  const { data } = await client.query({
    variables: { lang: locale },
    query: gql`
      query blogCount($lang: I18NLocaleCode!) {
        blogs(locale: $lang) {
          data {
            attributes {
              slug
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
