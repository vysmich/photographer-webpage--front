import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function albumGql(context) {
  const { data } = await client.query({
    variables: { lang: context.locale, slug: context.params.slug },

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
                  attributes {
                    url
                    alternativeText
                    formats
                  }
                }
              }
            }
          }
        }
        layout(locale: $lang) {
          data {
            attributes {
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
      data: data,
      cover: data.albums.data[0].attributes.AlbumCover.data.attributes,
      albumTitle: data.albums.data[0].attributes.AlbumTitle,
      photos: data.albums.data[0].attributes.Photos.data,
      albumDescription: data.albums.data[0].attributes.EventDescription,
      layoutData: data.layout.data.attributes,
    },
  };
}

export default albumGql;
