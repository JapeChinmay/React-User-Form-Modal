import "./App.css";
import AddUsers from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import React, { useState } from "react";
function App() {
  const [userData, setUserData] = useState([]);

  const getuserData = (uName, uAge) => {
    setUserData((prevData) => {
      return [
        ...prevData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers getData={getuserData} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
