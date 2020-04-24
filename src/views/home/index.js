import React from "react";
import './home.css';
import Background from '../../assets/images/background-home.png';
import DiscordImage from '../../assets/images/discord.png';
import TeamImage from '../../assets/images/multiple-users-silhouette.png';
import GithubImage from '../../assets/images/github-image.png';

export default function Home() {
  return (
    <div className="content" style={{background: `url(${Background}) right/cover`}}>
      <div className="shell-left">
        <div className="text-left-home">
          <h1 className="title-home">
            Lorem ipsum dolor sit amet
          </h1>
          <div className="divider back-blue"></div>
          <p className="secondary-text-home">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
        <div className="buttons-left-home">
          <div>
            <img src={DiscordImage}></img>
          </div>
          <div>
            <img src={TeamImage}></img>
          </div>
          <div>
            <img src={GithubImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
