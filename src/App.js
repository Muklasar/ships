import React, { useEffect, useState } from "react";
import "./App.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Navbar from './components/Navbar'
import Search from "./components/Search";
import Counter from "./components/Counter";
import Ships from "./components/Ships";

export default function App() {
  const [data, setData] = useState('')
  const [ships, setShips] = useState('')
  const fetchShips = async () => {
    const response = await request(gql`
      {
        ships {
          name
          home_port
          roles
          image

        }
      }
    `);
    console.log(response);
    setShips(response.data.ships)
    setData(response.data.ships)
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div></div>
        <div className="wrapper">
          <Search setShips={setShips} data={data}/>
          <Counter count={ ships && ships.length } />
          <Ships ships={ships}/>
        </div>
      </div>
    </div>
  );
}
