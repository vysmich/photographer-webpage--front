import { gql } from "@apollo/client";
import client from "../../apollo-client";

const addAnswer =
 gql`
      mutation contact(
        $name: String
        $phone: String
        $mail: String
        $message: String
      ) {
        createAnswersFromTheForm(
          data: { Name: $name, Phone: $phone, Mail: $mail, Message: $message }
        ) {
          data {
            attributes {
              Name
              Phone
              Mail
              Message
            }
          }
        }
      }
    `
  ;

  


export default addAnswer;
