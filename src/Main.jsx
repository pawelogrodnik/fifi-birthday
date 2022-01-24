import React from "react";
import "./App.css";
import Loader from "./loader";
import Card from "./card";
import { useLocation } from "react-router-dom";

const Main = () => {
  const [isLoaderVisible, setLoaderVisibility] = React.useState(true);
  React.useEffect(() => {
    startLoaderTimer();
  }, []);
  const location = useLocation();

  const startLoaderTimer = () => {
    setTimeout(() => {
      setLoaderVisibility(false);
    }, 5000);
  };
  return (
    <div className="main-app">
      {isLoaderVisible ? <Loader /> : <Card type={location.pathname} />}
    </div>
  );
};

export default Main;
