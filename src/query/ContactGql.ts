import { gql } from "@apollo/client";
import client from "../../apollo-client";
//types
import { GetStaticPropsContext } from "next";
import { Seo, LayoutData, IHero } from "./HomepageGql";

interface FormField {
  id: string;
  Label: string;
  PlaceHolder: string;
  Name: string;
}

export interface IForm {
  FormField: FormField[];
  SubmitButton: string;
}

export interface IAddressBlock {
  Title: string;
  Content: string;
  AddressField: {
    Lable: string;
    Content: string;
  }[];
}

export interface ContactProps {
  hero: IHero;
  seo: Seo;
  data: {
    AddressBlock: IAddressBlock;
    ContactForm: IForm;
    ContactSeo: Seo;
  };
  layoutData: LayoutData;
}
interface ContactGqlProps {
  props: ContactProps;
}

const contactGql = async (
  context: GetStaticPropsContext
): Promise<ContactGqlProps> => {
  const { data } = await client.query({
    variables: { lang: context.locale },

    query: gql`
      query contact($lang: I18NLocaleCode!) {
        contact(locale: $lang) {
          data {
            attributes {
              ContactHero {
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
              AddressBlock {
                Title
                Content
                AddressField {
                  Lable
                  Content
                }
              }
              ContactForm {
                FormField {
                  id
                  Label
                  PlaceHolder
                  Name
                }
                SubmitButton
              }
              ContactSeo {
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
      hero: data.contact.data.attributes.ContactHero,
      seo: data.contact.data.attributes.ContactSeo,
      data: data.contact.data.attributes,
      layoutData: data.layout.data.attributes,
    },
  };
};

export default contactGql;
