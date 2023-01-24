import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { PageCount } from "./ActionsCoutnGql";

export const textPageCountGql = async (locale: string): Promise<PageCount> => {
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
};

export default textPageCountGql;
