import React from "react";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Main pathz="/" />} />
          <Route path="/urodzinki" element={<Main pathz="/urodzinki" />} />
          <Route path="/urodzinki/" element={<Main pathz="/urodzinki/" />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
