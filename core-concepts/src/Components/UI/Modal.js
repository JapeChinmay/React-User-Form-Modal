import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.toCloseTheModal} />
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
    </div>
  );
};

export default Modal;
