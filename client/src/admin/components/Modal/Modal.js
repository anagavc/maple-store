import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export const ModalOverLay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className="flex flex-col mx-auto space-y-6 py-12 w-4/5 items-center justify-center">
        {children}
      </div>
    </div>
  );
};
//this is how to get accees to the div that our components should portal to
const portalElement = document.getElementById("overlays");

export const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
};
