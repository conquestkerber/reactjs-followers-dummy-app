import React from "react";
import "./styles/global.css";
import Header from "./components/Header";
import TopCardList from "./components/CardList";
import Overview from "./components/Overview";
import Switch from "./components/Switch";

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </>
  );
}

export default App;
