//apollo
import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { GetStaticPropsContext } from "next";
import { IHero, LayoutData, Seo } from "./HomepageGql";
import { ActionGallery } from "./ActionsGql";

export interface BlogGql {
  hero: IHero;
  title: string;
  text1: string;
  gallery1: ActionGallery;
  text2: string;
  gallery2: ActionGallery;
  slug: string;
  blogSeo: Seo;
  layoutData: LayoutData;
  data: any;
}

interface BlogGqlProps {
  props: BlogGql;
  revalidate: number;
}

const blogGql = async (
  context: GetStaticPropsContext
): Promise<BlogGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale, slug: context?.params?.slug },

    query: gql`
      query blog($lang: I18NLocaleCode!, $slug: String) {
        blogs(locale: $lang, filters: { slug: { eq: $slug } }) {
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
              slug
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
      data: data,
      hero: data.blogs.data[0].attributes.blogHero,
      title: data.blogs.data[0].attributes.title,
      text1: data.blogs.data[0].attributes.text1,
      gallery1: data.blogs.data[0].attributes.gallery1,
      text2: data.blogs.data[0].attributes.text2,
      gallery2: data.blogs.data[0].attributes.gallery2,
      blogSeo: data.blogs.data[0].attributes.blogSeo,
      slug: data.blogs.data[0].attributes.slug,
      layoutData: data.layout.data.attributes,
    },
    revalidate: 60,
  };
};

export default blogGql;
