import React, { Fragment, useState } from "react";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

import Card from "../UI/Card";
import Modal from "../UI/Modal";

const AddUsers = (props) => {
  const [enteredUserName, SetEntereduserName] = useState("");
  const [agechange, SetAgeChange] = useState("");
  const [error, setError] = useState();

  const changeUserNameHandler = (event) => {
    SetEntereduserName(event.target.value);
  };

  const changeAgeHandler = (event) => {
    SetAgeChange(event.target.value);
  };

  const AddUserHandler = (event) => {
    if (enteredUserName.trim().length === 0 || agechange.trim().length === 0) {
      setError({
        warning: "You hav entered wrong name or no age",
        message: "Enter valid credentials",
      });
    } else if (+agechange < 10) {
      setError({
        warning: "You have entered wrong age",
        message: "enter valid values",
      });
    }

    event.preventDefault();

    props.getData(enteredUserName, agechange);

    SetEntereduserName("");
    SetAgeChange("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <Modal
          warning={error.warning}
          message={error.message}
          toCloseTheModal={errorHandler}
        />
      )}
      <Card className={classes.input} toadd={classes.form}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">username</label>
          <input
            id="username"
            type="text"
            spellCheck
            onChange={changeUserNameHandler}
            value={enteredUserName}
          />

          <label htmlFor="age">age</label>
          <input
            id="age"
            type="number"
            onChange={changeAgeHandler}
            value={agechange}
          />
          <Button type="submit">submit</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUsers;
