import { useState, FC } from "react";
//Components
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import ContactForm from "./ContactForm";
//Types
import { PriceList } from "../query/PricesGql";
import { IForm } from "../query/ContactGql";

export interface PriceCardProps {
  list: PriceList;
  contactData: IForm;
}

const PriceCardWide: FC<PriceCardProps> = ({ list, contactData }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      padding: 0,
      inset: "20px",
      background: "transparent",
      border: "none",
    },
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="price-list relative grid w-full overflow-hidden rounded-md bg-white shadow-md transition-all sm:w-[80%] xl:mx-6 xl:w-full xl:grid-cols-2  ">
      <div className="relative aspect-[2/3] h-full rounded-t-md object-cover object-center md:h-full">
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
      <div className="flex flex-[1] flex-col justify-evenly px-6 pb-3 text-center  ">
        <div className=" ">
          <h2 className="mt-5 mb-10 text-center font-semibold tracking-wide text-5xl">
            {list.attributes.priceListHero.HeroHeading}
          </h2>
          <div className="text-left">
            <ReactMarkdown>{list.attributes.priceListPerex}</ReactMarkdown>
          </div>
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

export default PriceCardWide;
