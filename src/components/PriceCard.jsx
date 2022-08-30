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
    },
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="price-list relative grid overflow-hidden rounded-md bg-white shadow-md transition-all md:grid-cols-2  ">
      <div className="relative h-72 w-full rounded-t-md object-cover object-center md:h-full">
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
      <div className="flex flex-[1] flex-col justify-between px-6 pb-3 text-center ">
        <div className=" ">
          <h2 className="mt-5 mb-10 text-center font-semibold tracking-wide text-5xl">
            {list.attributes.priceListHero.HeroHeading}
          </h2>
          <ReactMarkdown>{list.attributes.priceListPerex}</ReactMarkdown>
        </div>
        <div className=" mb-3 text-center">
          <p className="mt-10 text-dark text-lg">{list.attributes.price}</p>
          <button
            onClick={openModal}
            className=" btn-primary my-5 inline-block"
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
        <div className=" h-full w-full overflow-hidden bg-bgsecondary px-11">
          <h3 className="mt-5 mb-7 text-center font-quitcher text-primary text-4xl">
            Objednávka balíčku: {list.attributes.priceListHero.HeroHeading}
          </h3>
          <ContactForm
            contactData={contactData}
            order={list.attributes.priceListHero.HeroHeading}
          ></ContactForm>
        </div>
      </Modal>
    </div>
  );
};

export default PriceCard;
