import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Todos from "./components/Todos";
import Todo from "./components/todo";

const App = () => {
  return (
    <>
      <Header  title="MyList"/>
      <Todos />
      <Todo />
      <Footer />
    </>
  );
};

export default App;
