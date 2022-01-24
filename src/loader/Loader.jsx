import * as React from "react";
import "./loader.scss";

const Loader = () => (
  <div className="toy-train">
    <div className="engine">
      <div className="window">
        <div className="engine-main">
          <div className="smokes">
            <span></span>
          </div>
        </div>
      </div>
      <div className="engine-body">
        <div className="wheels">
          <div className="big-wheel"></div>
          <div className="normal-wheel"></div>
        </div>
      </div>
    </div>
    <div className="locomotive">
      <div className="trash"></div>
      <div className="wheels">
        <div className="normal-wheel"></div>
        <div className="normal-wheel"></div>
      </div>
    </div>
    <div className="tracks">
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader;
