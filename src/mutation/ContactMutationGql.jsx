import { gql } from "@apollo/client";
import client from "../../apollo-client";

const addAnswer = gql`
  mutation contact(
    $name: String
    $phone: String
    $mail: String
    $message: String
    $order: String
  ) {
    createAnswersFromTheForm(
      data: {
        Name: $name
        Phone: $phone
        Mail: $mail
        Message: $message
        Order: $order
      }
    ) {
      data {
        attributes {
          Name
          Phone
          Mail
          Message
          Order
        }
      }
    }
  }
`;
export default addAnswer;
