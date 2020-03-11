import React from "react";

import NavBar from "../nav-bar/nav_bar";
import Login from "../session-forms/login_container";

export default () => {

  return (
    <div className="homepage">
      <NavBar />
      <div className="h-content1">
        < Login /> 
        <div className="splash-photo-container">
          <img className="splash-photo" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/88164652_831059540702416_4401096152632524800_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=tPFc1e3w9DcAX8jpmdr&_nc_ht=scontent-sjc3-1.xx&oh=9e9bc8d2deee0ee862b2f265e3218bc9&oe=5E90700D" alt=""/>
        </div>
      </div>
    </div>
  )
}