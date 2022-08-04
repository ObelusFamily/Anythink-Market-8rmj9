import React from "react";
import logo from "../../imgs/logo.png";
const Banner = (props) => {
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div className="d-flex justify-content-center align-items-center">
          <span id="get-part">A place to get</span>
          <div class="input-group rounded w-25 w-25 ml-2 mr-2">
            <input type="search" onKeyUp={(e) => {
              props.onSearchFilter(e.currentTarget.value)

            }} class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
