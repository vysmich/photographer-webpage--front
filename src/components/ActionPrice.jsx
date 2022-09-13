import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

import Modal from "react-modal";
import ContactForm from "./ContactForm";

const ActionPrice = ({ priceItem, contactData }) => {
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
    <div className="my-5 rounded bg-white py-5 px-10  shadow-md md:my-10">
      <h3 className="font-quitcher text-dark text-4xl">{priceItem.Title}</h3>
      <ReactMarkdown>{priceItem.Description}</ReactMarkdown>
      <p className="font-quitcher text-dark text-3xl">{priceItem.Price}</p>

      <button onClick={openModal} className=" btn-primary my-5 inline-block">
        {priceItem.Btn}
      </button>
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
            {priceItem.orderText} {priceItem.Title}
            {console.log(priceItem.Title)}
          </h3>
          <ContactForm
            contactData={contactData}
            order={priceItem.orderText + priceItem.Title}
            closeModal={closeModal}
          ></ContactForm>
        </div>
      </Modal>
    </div>
  );
};

export default ActionPrice;
