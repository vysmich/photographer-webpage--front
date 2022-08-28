import { gql } from "@apollo/client";
import client from "../../apollo-client";

async function contactGql(context) {
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
      } # Write your query or mutation here
    `,
  });

  return {
    props: {
      hero: data.contact.data.attributes.ContactHero,
      data: data.contact.data.attributes,
      layoutData: data.layout.data.attributes,
    },
  };
}

export default contactGql;
