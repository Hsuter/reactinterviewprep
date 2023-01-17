import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard";

let userData = [];

const App = () => {
  const [userInfos, setUserInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = async () => {
    const { data } = await axios
      .get(`https://randomuser.me/api/?page=${pageNumber}`)
      .then((data) => {
        return data;
      });
    return data;
  };
  const getNextPage = () => {
    getData().then((randomData) => {
      const newUserInfo = [...userInfos, ...randomData.results];
      setUserInfo(newUserInfo);
      console.log("second", userInfos);
    });
  };

  useEffect(() => {
    getData();
    getNextPage();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <button
          onClick={() => {
            getData();
          }}
        >
          Get Data
        </button>

        <div className="card-group ">
          {userInfos.map((userinfo, index) => (
            <div key={index}>
              <InfoCard userinfo={userinfo} />
            </div>
          ))}
        </div>

        <Link to="/Page2">
          <button>Page2</button>
        </Link>
      </div>
      <button onClick={getNextPage}>Next Page</button>
    </div>
  );
};

export default App;
