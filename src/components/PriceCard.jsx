import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import ContactForm from "./ContactForm";

const PriceCard = ({ list, contactData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const customStyles = {
    content: {
      padding: 0,
      inset: "20px",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="price-list xxl: relative mb-6 flex w-full flex-col overflow-hidden rounded-md bg-white shadow-md transition-all sm:mx-3 sm:w-[80%] xl:w-[31%] ">
      <div className="relative aspect-[1/1] w-full rounded-t-md object-cover object-center ">
        <Image
          src={`${list.attributes.priceListHero.HeroImage.data.attributes.url}`}
          alt={
            list.attributes.priceListHero.HeroImage.data.attributes
              .alternativeText
          }
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className=" flex flex-grow flex-col justify-between px-1 pb-3 text-center sm:px-6 ">
        <div className=" ">
          <h2 className="mt-5 mb-10 text-center font-semibold tracking-wide text-4xl">
            {list.attributes.priceListHero.HeroHeading}
          </h2>
          <ReactMarkdown>{list.attributes.priceListPerex}</ReactMarkdown>
        </div>
        <div className=" mb-3 text-center">
          <p className="mt-10 text-dark text-lg">{list.attributes.price}</p>
          <button
            onClick={openModal}
            className=" btn-primary mb-5 inline-block"
          >
            {list.attributes.priceListMoreBtn}
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=" h-full w-full overflow-auto bg-bgsecondary px-3 md:px-11">
          <button
            className="absolute top-2 right-4 text-base"
            onClick={closeModal}
          >
            x
          </button>
          <h3 className="mt-5 mb-7 text-center font-quitcher text-primary text-4xl">
            Objednávka balíčku: {list.attributes.priceListHero.HeroHeading}
          </h3>
          <ContactForm
            contactData={contactData}
            order={list.attributes.priceListHero.HeroHeading}
            closeModal={closeModal}
          ></ContactForm>
        </div>
      </Modal>
    </div>
  );
};

export default PriceCard;
