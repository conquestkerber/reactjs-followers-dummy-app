import React, { useState } from "react";
import CardSmall from "./SmallCard";
import "../styles/overview.css";

import { smallCardData } from "../data";

function Overview() {
  const [isCLicked, setIsClicked] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    setIsClicked((prev) => (prev = !prev));
  };

  return (
    <section className="overview">
      <div className="wrapper">
        <h2 onClick={clickHandler}>Overview - Today</h2>
        {isCLicked && (
          <div className="grid">
            {smallCardData.map(({ icon, pageViews, growth, key }) => (
              <CardSmall
                icon={icon}
                key={key}
                pageViews={pageViews}
                growth={growth}
              />
            ))}

            <div className="card-small">
              <p className="card-small-views">Likes</p>
              <p className="card-small-icon">
                <img src="images/facebook.png" />
              </p>
              <p className="card-small-number">52</p>
              <p className="card-small-percentage is-danger">
                <span>
                  <img src="images/up.png" />
                  2%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Likes</p>
              <p className="card-small-icon">
                <img src="images/instagram24.png" />
              </p>
              <p className="card-small-number">5462</p>
              <p className="card-small-percentage">
                <span>
                  <img src="images/up.png" />
                  100%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">profile Views</p>
              <p className="card-small-icon">
                <img src="images/instagram24.png" />
              </p>
              <p className="card-small-number">52k</p>
              <p className="card-small-percentage">
                <span>
                  <img src="images/up.png" />
                  92%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Retweets</p>
              <p className="card-small-icon">
                <img src="images/twitter.png" />
              </p>
              <p className="card-small-number">117</p>
              <p className="card-small-percentage">
                <span>
                  <img src="images/up.png" />
                  30%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Likes</p>
              <p className="card-small-icon">
                <img src="images/twitter.png" />
              </p>
              <p className="card-small-number">500</p>
              <p className="card-small-percentage">
                <span>
                  <img src="images/up.png" />
                  50%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Likes</p>
              <p className="card-small-icon">
                <img src="images/youtube.png" />
              </p>
              <p className="card-small-number">10</p>
              <p className="card-small-percentage is-danger">
                <span>
                  <img src="images/up.png" />
                  19%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Total views</p>
              <p className="card-small-icon">
                <img src="images/youtube.png" />
              </p>
              <p className="card-small-number">142</p>
              <p className="card-small-percentage is-danger">
                <span>
                  <img src="images/up.png" />
                  12%
                </span>
              </p>
            </div>
            <div className="card-small">
              <p className="card-small-views">Total views</p>
              <p className="card-small-icon">
                <img src="images/twitter.png" />
              </p>
              <p className="card-small-number">12</p>
              <p className="card-small-percentage is-danger">
                <span>
                  <img src="images/up.png" />
                  2%
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Overview;
