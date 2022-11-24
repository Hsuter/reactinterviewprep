import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [userInfos, setUserInfo] = useState([]);

  let userDatas = [];

  const getData = () => {
    fetch(`https://randomuser.me/api/`)
      .then((response) => response.json())
      .then((response) => {
        setUserInfo(response.results);
        userDatas = [...userInfos];
        console.log(userInfos);
      });
  };

  const check = () => {
    console.log("all ", userDatas);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          getData();
        }}
      >
        Get Data
      </button>
      <div>
        {userDatas.map((userData, index) => (
          <div key={index}>
            <li key={index}>
              <p>{userData.name.last} </p>
              <img
                src={userData.picture.medium}
                alt={userData.name.first}
              ></img>
            </li>
          </div>
        ))}
      </div>
      <button onClick={check}>Check</button>
    </div>
  );
};

export default App;
