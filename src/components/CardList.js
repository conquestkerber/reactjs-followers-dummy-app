import React from "react";
import Card from "./Card";
import "../styles/CardList.css";

import { generate as id } from "shortid";

import { data } from "../data";

function TopCardList() {
  return (
    <section className="top-card">
      <div className="wrapper">
        <div className="grid">
          {data.map((cardData) => (
            <Card key={id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCardList;
