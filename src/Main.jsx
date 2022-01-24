import React from "react";
import "./App.css";
import Loader from "./loader";
import Card from "./card";
import { useLocation } from "react-router-dom";

const Main = ({ pathz }) => {
  const [isLoaderVisible, setLoaderVisibility] = React.useState(true);
  React.useEffect(() => {
    console.log(pathz);
    startLoaderTimer();
  }, []);
  const location = useLocation();
  console.log(location);
  const startLoaderTimer = () => {
    setTimeout(() => {
      setLoaderVisibility(false);
    }, 5000);
  };
  return (
    <div className="main-app">
      {isLoaderVisible ? <Loader /> : <Card type={location.search} />}
    </div>
  );
};

export default Main;
