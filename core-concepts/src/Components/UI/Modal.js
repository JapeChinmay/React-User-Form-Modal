import React, { Fragment } from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.toCloseTheModal} />;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h1>{props.warning}</h1>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
      </header>
      <footer className={classes.actions}>
        <Button onClick={props.toCloseTheModal}>Close</Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop toCloseTheModal={props.toCloseTheModal} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Overlay
          warning={props.warning}
          message={props.message}
          toCloseTheModal={props.toCloseTheModal}
        />,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};

export default Modal;
