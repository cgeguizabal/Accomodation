import React, { useEffect, useState } from "react";
import accommodationGet from "../Services/getting";
import { Link } from "react-router-dom";

function Accommodation() {
  const [accommodations, setAccommodations] = useState([]);
  //   const [isAuthenticated, setIsAuthenticated] = useState(false)

  const fetchData = async () => {
    const response = await accommodationGet();
    setAccommodations(response);
  };

  useEffect(() => {
    // const session = sessionStorage.getItem("api-token");
    // if (session) {
    //   setIsAuthenticated(true);
    // } else {
    //   setIsAuthenticated(false);
    // }
    fetchData();
  }, []);
  const id = accommodations.map((data) => data.id);
  console.log(id);
  console.log(accommodations);

  const capturingID = async (id) => {
    // await accommodationPut(id);
    console.log(`IT WORKS BITCH ${id}`);
  };

  return (
    <div>
      <h1>Accommodations</h1>
      {accommodations.map((item) => {
        return (
          <div className="hotel-container">
            <p className="hotel-name">{item.name}</p>
            <Link to={`/update/${item.id}`}>Update</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Accommodation;
