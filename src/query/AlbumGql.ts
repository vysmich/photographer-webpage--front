import { gql } from "@apollo/client";
import { GetStaticPropsContext } from "next";
import client from "../../apollo-client";
import { LayoutData } from "./HomepageGql";

export interface Photo {
  id: string;

  attributes: {
    url: string;
    alternativeText: string;
    formats: {
      large: {
        url: string;
      };
      medium: {
        url: string;
      };
      small: {
        url: string;
      };
    };
    width: number;
    height: number;
  };
}
export interface Cover {
  url: string;
  alternativeText: string;
}

export interface AlbumProps {
  cover: Cover;
  photos: Photo[];
  albumTitle: string;
  albumDescription: string;
  layoutData: LayoutData;
}

interface AlbumGqlProps {
  props: AlbumProps;
  revalidate: number;
}

const albumGql = async (
  context: GetStaticPropsContext
): Promise<AlbumGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale, slug: context?.params?.slug },

    query: gql`
      # Write your query or mutation here
      query album($lang: I18NLocaleCode!, $slug: String) {
        albums(locale: $lang, filters: { Slug: { eq: $slug } }) {
          data {
            id
            attributes {
              AlbumTitle
              EventDescription
              AlbumCover {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              Photos(pagination: { start: 0, limit: -1 }) {
                data {
                  id
                  attributes {
                    url
                    alternativeText
                    formats
                    width
                    height
                  }
                }
              }
            }
          }
        }
        layout(locale: $lang) {
          data {
            attributes {
              TextPageNav {
                navItem {
                  link
                  title
                }
              }
              footerText
              instaText
              Nav {
                navItem {
                  link
                  title
                }
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      cover: data.albums.data[0].attributes.AlbumCover.data.attributes,
      albumTitle: data.albums.data[0].attributes.AlbumTitle,
      photos: data.albums.data[0].attributes.Photos.data,
      albumDescription: data.albums.data[0].attributes.EventDescription,
      layoutData: data.layout.data.attributes,
    },
    revalidate:60
  };
};

export default albumGql;
