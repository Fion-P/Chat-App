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
          <img className="splash-photo" src="homepage1.png" alt=""/>
        </div>
      </div>
      <div className="h-content2">
        <h1 className="h-content2-header">So many ways to connect with all your friends</h1>
        <div className="h-content2-blocks">
          <div className="c2-block-container">
            <div className="c2-block">
              <div className="block-img">
                <img src="homepage2.png" 
                />
              </div>
              <div className="c2-block-content">
                <h1 className="bc-h1">Get the group</h1>
                <h1 className="bc-h1"> started</h1>

                <h2 className="bc-h2">Easily find your friends and get </h2>
                <h2 className="bc-h2">the group started, even without</h2>
                <h2 className="bc-h2">their phone numbers. </h2>
              </div>
            </div>
          </div>
          <div className="c2-block-container">
            <div className="c2-block">
              <div className="block-img">
                <img src="homepage3.png" 
                />
              </div>
              <div className="c2-block-content">
                <h1 className="bc-h1">Hang out and have</h1>
                <h1 className="bc-h1">fun together</h1>

                <h2 className="bc-h2">See who's online, send messages</h2>
                <h2 className="bc-h2">and reactions, and group video</h2>
                <h2 className="bc-h2">chat together. It's the closest to</h2>
                <h2 className="bc-h2">hanging out.</h2>
              </div>
            </div>
          </div>
          <div className="c2-block-container">
            <div className="c2-block">
              <div className="block-img">
                <img src="homepage4.png"
                />
              </div>
              <div className="c2-block-content">
                <h1 className="bc-h1">Say everything</h1>
                <h1 className="bc-h1"> better</h1>

                <h2 className="bc-h2">Make them laugh with stickers,</h2>
                <h2 className="bc-h2"> GIFs and camera filters. Plus,</h2>
                <h2 className="bc-h2"> choose available custom colors</h2>
                <h2 className="bc-h2"> to make Messenger</h2>
                <h2 className="bc-h2"> entirely yours.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-content3">
        <div className="all-rights-reserved">
          <p className="rights-label">© Facebook 2020.</p> The Facebook logos and photos are trademarks of their respective owners.
        </div>
        <div className="links">

        </div>
      </div>
    </div>
  )
}