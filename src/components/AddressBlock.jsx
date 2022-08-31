import React from "react";
import SocialLinks from "./layout/Footer/SocialLinks";

const AddressBlock = ({ adressData }) => {
  return (
    <address className="self-start py-6 md:py-0 md:px-6">
      <h1 className="pt-0 font-bold text-dark text-4xl">{adressData.Title}</h1>
      <p className="mb-0 pt-2 pb-4">{adressData.Content}</p>
      <SocialLinks color={"fill-primary"} />
      <div className="space-y-4">
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-5 w-5 sm:mr-6"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{adressData.AddressField[2].Content}</span>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-5 w-5 sm:mr-6"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          <span>{adressData.AddressField[0].Content}</span>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="mr-2 h-5 w-5 sm:mr-6"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          <span>{adressData.AddressField[1].Content}</span>
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 h-5 w-5 sm:mr-6"
          >
            <path d="M15 14.168H5V12.5h10Zm0-3.336H5V9.168h10ZM15 7.5H5V5.832h10ZM2.5 18.332l1.25-1.25L5 18.332l1.25-1.25 1.25 1.25 1.25-1.25 1.25 1.25 1.25-1.25 1.25 1.25 1.25-1.25 1.25 1.25 1.25-1.25 1.25 1.25V1.668l-1.25 1.25L15 1.668l-1.25 1.25-1.25-1.25-1.25 1.25L10 1.668l-1.25 1.25-1.25-1.25-1.25 1.25L5 1.668l-1.25 1.25-1.25-1.25Zm0 0" />
          </svg>
          <span>IČO:{adressData.AddressField[3].Content}</span>
        </p>
      </div>
    </address>
  );
};

export default AddressBlock;
