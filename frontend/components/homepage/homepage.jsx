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
      <div className="h-content2">
        <h1 className="h-content2-header">So many ways to connect with all your friends</h1>
        <div className="h-content2-blocks">
          <div className="c2-block-container">
            <div className="c2-block">
              <div className="block-img">
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/42466073_1965890656806201_8160997823056183296_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=ORBIixlO2b8AX-PHHAn&_nc_ht=scontent-sjc3-1.xx&oh=f5e95ab5d445905f6f19f3a46447cb41&oe=5E935F2C" 
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
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/42428744_249359745772029_7507114388252262400_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=k0lVqpVaXKwAX8PTaew&_nc_ht=scontent-sjc3-1.xx&oh=9a3fe49ceb384bb9dbedad4bb7ed678a&oe=5E95F8EE" 
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
                <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.8562-6/42502732_246464739398907_7035450498668822528_n.png?_nc_cat=1&_nc_sid=6825c5&_nc_ohc=AdgrsfKnl9AAX8bHNtD&_nc_ht=scontent-sjc3-1.xx&oh=0f0181edb832ff4e11150b5dee3d0063&oe=5EA4782F"
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
    </div>
  )
}