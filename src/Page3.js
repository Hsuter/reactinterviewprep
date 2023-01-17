import React, { useState, useEffect } from "react";
import "./Page3.css";
import axios from "axios";

const Page3 = () => {
  const [people, setPeople] = useState([]);
  const [location, setLocation] = useState([]);

  const fetchData = async () => {
    return await axios
      .get("https://randomuser.me/api/?results=20")
      .then(function (response) {
        const { results } = response.data;
        return results;
      })
      .catch((error) => {
        console.log("Thers an erros", error);
      });
  };

  const flattenedlocations = (location) => {
    console.log(location);
  };
  useEffect(() => {
    fetchData().then((allPeople) => {
      setPeople(allPeople);
      console.log(allPeople);
    });
  }, []);
  return (
    <div>
      <div></div>
      <button onClick="">show location</button>
      <div>
        {people ? (
          people?.map((person, i) => <div key={i}>{person.name.first}</div>)
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
};

export default Page3;
