import React from "react";
import Main from "./Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/:type" element={<Main />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
