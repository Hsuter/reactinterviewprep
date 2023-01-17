import "./Page2.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [userInfos, setUserInfo] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  const getData = async () => {
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${pageNumber}`
    );
    console.log(data);
    return data;
  };
  const fetchnewUserInfos = () => {
    getData().then((randomData) => {
      const newUserInfo = [...userInfos, ...randomData.results];
      setUserInfo(newUserInfo);
      console.log("second", userInfos);
    });
  };
  const getNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetchnewUserInfos();
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchnewUserInfos();
          
        }}
      >
        Get Data
      </button>

      <div className="info">
        {userInfos.map((newUserInfo, index) => (
          <div key={index}>
            <li key={index}>
              <p>{newUserInfo.name.last} </p>
              <img
                src={newUserInfo.picture.medium}
                alt={newUserInfo.name.first}
              ></img>
            </li>
          </div>
        ))}
      </div>

      <Link to="/Page2">
        <button>Page2</button>
      </Link>
    </div>
  );
};

export default Page2;
