import { gql } from "@apollo/client";
import client from "../../apollo-client";

export interface PageCount {
  props: {
    data: {
      attributes: {
        Slug: string;
      };
    }[];
  };
}

export const actionsCountGql = async (locale: string): Promise<PageCount> => {
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
};

export default actionsCountGql;
