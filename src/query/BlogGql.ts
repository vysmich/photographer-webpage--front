//apollo
import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { GetStaticPropsContext } from "next";
import { IHero, LayoutData, Seo, Image } from "./HomepageGql";
import { ActionGallery } from "./ActionsGql";

export interface BlogGql {
  hero: IHero;
  title: string;
  text1: string;
  gallery1: ActionGallery;
  text2: string;
  gallery2: ActionGallery;
  blogSeo: Seo;
  layoutData: LayoutData;
}

interface BlogGqlProps {
  props: BlogGql;
  revalidate: number;
}

const blogGql = async (
  context: GetStaticPropsContext
): Promise<BlogGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query blog($lang: I18NLocaleCode!) {
        blogs(locale: $lang) {
          data {
            attributes {
              blogHero {
                HeroHeading
                HeroImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                HeroImageMobile {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
              }
              title
              text1
              gallery1 {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              text2
              gallery2 {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              blogSeo {
                SeoTitle
                SeoDescription
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
      hero: data.blog.data.attributes.blogHero,
      title: data.blog.data.attributes.title,
      text1: data.blog.data.attributes.text1,
      gallery1: data.blog.data.attributes.gallery1,
      text2: data.blog.data.attributes.text2,
      gallery2: data.blog.data.attributes.gallery2,
      blogSeo: data.blog.data.attributes.blogSeo,
      layoutData: data.layout.data.attributes,
    },
    revalidate: 60,
  };
};

export default blogGql;
