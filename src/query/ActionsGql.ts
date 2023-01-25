import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { GetStaticPropsContext } from "next";
import { IHero, LayoutData, Seo } from "./HomepageGql";
import { IForm } from "./ContactGql";

export interface Price {
  Title: string;
  Description: string;
  Price: string;
  Btn: string;
  orderText: string;
}

export interface ActionGallery {
  data: {
    attributes: {
      url: string;
      alternativeText: string;
    };
  }[];
}
export interface ActionProps {
  hero: IHero;
  body: string;
  gallery: ActionGallery;
  
  prices: Price[];
  contactData: IForm;
  seo: Seo;
  layoutData: LayoutData;
}

interface ActionsGqlProps {
  props: ActionProps;
  revalidate: number;
}

export const ActionsGql = async (
  context: GetStaticPropsContext
): Promise<ActionsGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale, slug: context?.params?.slug },
    query: gql`
      query actions($lang: I18NLocaleCode!, $slug: String) {
        actions(locale: $lang, filters: { Slug: { eq: $slug } }) {
          data {
            attributes {
              ActionHero {
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
                      url
                      alternativeText
                    }
                  }
                }
              }
              Content
              Gallery {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              Slug
              Price {
                Title
                Description
                Price
                Btn
                orderText
              }
              actionSeo {
                SeoTitle
                SeoDescription
              }
            }
          }
        }
        contact {
          data {
            attributes {
              ContactForm {
                FormField {
                  Label
                  PlaceHolder
                  Name
                }
                SubmitButton
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
      hero: data.actions.data[0].attributes.ActionHero,
      body: data.actions.data[0].attributes.Content,
      prices: data.actions.data[0].attributes.Price,
      gallery: data.actions.data[0].attributes.Gallery,
      contactData: data.contact.data.attributes.ContactForm,
      seo: data.actions.data[0].attributes.actionSeo,
      layoutData: data.layout.data.attributes,
    },
    revalidate: 60,
  };
};

export default ActionsGql;
