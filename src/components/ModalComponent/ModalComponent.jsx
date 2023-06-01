import React from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export const ModalComponent = (props) => {
  return (
    <Modal classNames={{
        modal: "w-[500px]"
    }} open={props.open} onClose={props.onClose}>
      <p className="font-bold text-xl mb-5">{props.modalHeader}</p>
      {props.children}
    </Modal>
  );
};
