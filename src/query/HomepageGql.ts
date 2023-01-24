import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { GetStaticPropsContext } from "next";

export interface IHero {
  HeroHeading: string;
  HeroImage: {
    data: {
      attributes: {
        url: string;
        alternativeText: string;
      };
    };
  };
  HeroImageMobile: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
}

export interface Image {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
      formats: {
        medium: {
          url: string;
        };
        small: {
          url: string;
        };
      };
    };
  };
}

export interface GallleryItem {
  CategoryName: string;
  Link: string;
  Image: Image;
}

export interface IMainCategoriesBanner {
  Title: string;
  Content: string;
  PortfolioButton: {
    btnText: string;
    btnLink: string;
  };
  Gallery: GallleryItem[];
}

export interface IAboutBanner {
  Title: string;
  subTitle: string;
  Content: string;
  psText: string;
  btnText: string;
  aboutGallery: {
    Image: Image;

    CategoryName: string;
  }[];
}

export interface Seo {
  SeoTitle: string;
  SeoDescription: string;
}

export interface LayoutData {
  TextPageNav: {
    navItem: {
      link: string;
      title: string;
    }[];
  };
  footerText: string;
  instaText: string;
  Nav: {
    navItem: {
      link: string;
      title: string;
    }[];
  };
}

export interface HomepageProps {
  hero: IHero;
  mainCategoriesBanner: IMainCategoriesBanner;
  aboutBanner: IAboutBanner;
  seo: Seo;
  layoutData: LayoutData;
}

interface HomepageGqlProps {
  props: HomepageProps;
}

async function homepageGql(
  context: GetStaticPropsContext
): Promise<HomepageGqlProps> {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query homepage($lang: I18NLocaleCode!) {
        homepage(locale: $lang) {
          data {
            attributes {
              Hero {
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
              MainCategoriesBanner {
                Title
                Content
                PortfolioButton {
                  btnText
                  btnLink
                }

                Gallery {
                  CategoryName
                  Link
                  Image {
                    data {
                      attributes {
                        formats
                        url
                        alternativeText
                      }
                    }
                  }
                }
              }
              AboutBanner {
                Title
                subTitle
                Content
                psText
                btnText
                aboutGallery {
                  Image {
                    data {
                      attributes {
                        formats
                        alternativeText
                        url
                      }
                    }
                  }
                  CategoryName
                }
              }
              HomepageSeo {
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
      hero: data.homepage.data.attributes.Hero,
      mainCategoriesBanner: data.homepage.data.attributes.MainCategoriesBanner,
      aboutBanner: data.homepage.data.attributes.AboutBanner,
      seo: data.homepage.data.attributes.HomepageSeo,
      layoutData: data.layout.data.attributes,
    },
  };
}

export default homepageGql;
