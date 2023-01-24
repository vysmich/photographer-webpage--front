//apollo
import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { GetStaticPropsContext } from "next";
import { IHero, LayoutData, Seo } from "./HomepageGql";

export interface Album {
  id: string;
  attributes: {
    Slug: string;
    AlbumTitle: string;
    AlbumCover: {
      data: {
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
    categories: {
      data: {
        attributes: {
          Categories: string;
        };
      };
    };
  };
}
export interface Category {
  attributes: {
    Categories: string;
  };
}

export interface PortfolioProps {
  perex: string;
  hero: IHero;
  seo: Seo;
  albums: Album[];
  categories: Category[];
  layoutData: LayoutData;
}
export interface PortfolioGqlProps {
  props: PortfolioProps;
}

const portfolioGql = async (
  context: GetStaticPropsContext
): Promise<PortfolioGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query portfolio($lang: I18NLocaleCode!) {
        portfolio(locale: $lang) {
          data {
            attributes {
              Portfolio_perex
              Portfolio_hero {
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
              PortfolioSeo {
                SeoTitle
                SeoDescription
              }
            }
          }
        }
        albums(locale: $lang) {
          data {
            id
            attributes {
              Slug
              AlbumTitle
              AlbumCover {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
              categories {
                data {
                  attributes {
                    Categories
                  }
                }
              }
            }
          }
        }
        categories(locale: $lang) {
          data {
            attributes {
              Categories
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
      hero: data.portfolio.data.attributes.Portfolio_hero,
      perex: data.portfolio.data.attributes.Portfolio_perex,
      seo: data.portfolio.data.attributes.PortfolioSeo,
      albums: data.albums.data,
      categories: data.categories.data,
      layoutData: data.layout.data.attributes,
    },
  };
};

export default portfolioGql;
