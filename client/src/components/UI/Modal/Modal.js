import { Fragment } from "react";
import ReactDom from "react-dom";
import PrimaryButton from "../Buttons/PrimaryButton";

import classes from "./Modal.module.css";
import { CheckCircleOutline } from "@mui/icons-material";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverLay = ({ message }) => {
  return (
    <div className={classes.modal}>
      <div className="flex flex-col mx-auto space-y-12 py-12">
        <div className={`border-b border-b-gold w-full flex justify-center`}>
          <h3
            className={`font-body text-lg text-center text-gold mb-4`}
          >{`${message}`}</h3>
        </div>
        <div className="w-full h-4/5 flex items-center justify-center">
          <CheckCircleOutline
            sx={{ fontSize: 60 }}
            className="text-2xl text-gold animate-pulse"
          />
        </div>
        <PrimaryButton path="/products/allProducts" title="Explore" />
      </div>
    </div>
  );
};
//this is how to get accees to the div that our components should portal to
const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, message }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverLay message={message}></ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
